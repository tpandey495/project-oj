const routers = require('express').Router();
const userRoutes = require('./user.routes');
const problemRoutes=require('./problem.routes');
const submissionRoutes=require('./submission.routes');

routers.use("/users", userRoutes);
routers.use("/problems", problemRoutes);
routers.use("/submission",submissionRoutes);
module.exports = routers;