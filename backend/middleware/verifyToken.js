const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization; 
        if (!token) return res.status(403).send({ auth: false, message: 'No token provided' });
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.userId });
        if (!user) throw { status: 400, message: 'User not found' };

        req.token = token;
        req.role = decoded.role;
        req.userId = decoded.userId;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send(e);
    }
};

exports.verifyRole = (roles) => {
    return async (req, res, next) => {
        try {
            if (roles.includes(req.role)) { 
                next();
            } else {
                res.status(403).send("You do not have permission to perform this action");
            }
        } catch (e) {
            res.status(400).send(e.message);
        }
    };
};




