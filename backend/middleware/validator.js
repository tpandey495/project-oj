const {validationResult,body } = require('express-validator');


exports.toLowerCase = (req, res, next) => {
  if (req.body.email) req.body.email = req.body.email.toLowerCase();
  if (req.body.firstName) req.body.firstName = req.body.firstName.toLowerCase();
  if (req.body.lastName) req.body.lastName = req.body.lastName.toLowerCase();
  if (req.body.role) req.body.role = req.body.role.toLowerCase();
  next();
};


exports.signupValidation = [
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('dob').isDate().withMessage('Invalid date of birth'),
  body('firstName').isString().withMessage('First name must be a string')
  .isLength({ min: 2 })
  .withMessage('First name must be at least 2 characters long'),
  body('lastName').isString().withMessage('Last name must be a string'),
];

exports.signinValidation = [
  body('email')
    .isEmail()
    .withMessage('Invalid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

