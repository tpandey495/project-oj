const routers = new require('express').Router();
const userController = require('../controllers/user.controller');

routers.post('/signup',userController.signUp);
routers.get('/signIn',userController.signIn);

module.exports = routers;