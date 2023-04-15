const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
 const routes = require('src/routes/index.js');
 

app.use(express.json());
const mongoString = process.env.MONGO_DB_URL
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
	console.log('error connection to database ------>>>>>>>>>> ',error);
})

database.once('connected', () => {
	console.log('Database Connected');
})



app.use('/v1', routes);

app.listen(3000, () => {
	console.log(`Server Started at 3000`)
})