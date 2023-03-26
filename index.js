const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
require('dotenv').config();
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.use('/api', routes)



app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})