const routers = require('express').Router();
const userRoutes = require('./user.routes');
const problemRoutes=require('./problem.routes');

routers.use("/users", userRoutes);
routers.use("/problems", problemRoutes);

module.exports = routers;