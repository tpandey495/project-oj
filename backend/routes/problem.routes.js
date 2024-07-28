const routers = new require('express').Router();
const problemController = require('../controllers/problem.controller');
const {verifyRole,verifyToken}=require('../middleware/verifyToken');

routers.post('/add',verifyToken,verifyRole(['admin','superadmin']),problemController.createProblem);
routers.get('/get',problemController.getProblems);
routers.post('/run',verifyToken,problemController.submission);

module.exports = routers;