const express = require('express');
const { connectDB } = require('./config/db');
require('dotenv').config();
require("colors");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/test',require('./FAKE_API_CONTROLLER/request'));

const PORT = process.env.PORT;

app.listen(process.env.PORT,() => console.log(`Server is running on port ${PORT}`));