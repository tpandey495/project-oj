const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/response');
const { verifyToken } = require('../middleware/verifyToken');

const createToken = (user) => {
  return jwt.sign({ userId: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};


exports.signup = async (req, res) => {
  const { password, email, dob, firstName, lastName, role = 'user' } = req.body;

  if (!['user', 'admin', 'superadmin'].includes(role)) {
    return sendErrorResponse(res, 400, 'Invalid role');
  }

  if (role === 'admin' || role === 'superadmin') {
    if (!req.headers.authorization)
      return sendErrorResponse(res, 403, 'Contact superadmin to create admin or superadmin accounts')
    const token = req.headers.authorization;
    try {
      const decoded = verifyToken(token);
      if (decoded.role !== 'superadmin')
        return sendErrorResponse(res, 403, 'Only superadmin can create admin or superadmin accounts');
    } catch (err) {
      return sendErrorResponse(res, 401, err.message);
    }
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      password: hashedPassword,
      email,
      dob,
      firstName,
      lastName,
      role
    });
    const userResponse = newUser.get({ plain: true });
    delete userResponse.password;
    delete userResponse.role;
    return sendSuccessResponse(res, 201, userResponse)
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return sendErrorResponse(res, 404, "User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return sendErrorResponse(res, 401, "Invalid password");
    }
    const token = createToken(user);
    const userResponse = user.get({ plain: true });
    delete userResponse.password;
    delete userResponse.role;
    return sendSuccessResponse(res, 200, user, { token: token })
  } catch (error) {
    return sendErrorResponse(res, 500, error.message);
  }
};