const routers = new require('express').Router();
const submissionController = require('../controllers/submission.controller');
const {verifyToken}=require('../middleware/verifyToken');

routers.post('/run',submissionController.submission);

module.exports = routers;