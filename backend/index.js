const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const routes=require('./routes');
require('dotenv').config();
const Port=process.env.port||9000

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret:process.env.Session_Secret,
    resave: false,
    saveUninitialized: false,
  }));  

//base route of api
app.use("/api", routes);
app.get('/', (req, res) => {
    res.send({ message: 'server is working' });
})

app.listen(Port,() => console.log('server has started',Port));