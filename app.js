const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT | 3001;
var cors = require('cors')

app.use(cors());
// Add headers


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const router = require('./routes/apiRoute');


app.use('/api/v1/', router);

const server = http.createServer(app);


module.exports=app;