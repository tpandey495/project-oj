const routers = new require('express').Router();
const userController = require('../controllers/user.controller');
const {signupValidation,signinValidation,validate,toLowerCase}=require('../middleware/validator');

routers.post('/signup',signupValidation, validate,toLowerCase,userController.signup);
routers.post('/signin',signinValidation,validate,toLowerCase,userController.signin);

module.exports = routers;