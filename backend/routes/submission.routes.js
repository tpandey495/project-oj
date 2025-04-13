const routers = new require('express').Router();
const submissionController = require('../controllers/submission.controller');
const {verifyToken}=require('../middleware/verifyToken');

routers.post('/run',submissionController.run);
routers.post('/submit',submissionController.submit);
module.exports = routers;   