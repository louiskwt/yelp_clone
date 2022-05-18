require('dotenv').config();

const express = require('express');
const restaurantRoutes = require('./routes/restaurantRoutes') 
const morgan = require('morgan');
const cors = require('cors')


const app = express();

// Middlewares

// Logger
app.use(morgan("dev"));

// cors middleware
app.use(cors());
// Body parser
app.use(express.json()); // take the body and attatch to the req obj

app.use('/', restaurantRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on PORT: ${PORT}`);
})