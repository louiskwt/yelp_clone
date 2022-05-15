require('dotenv').config();

const express = require('express');
const db = require('./db');
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

// GET all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');

        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch(err) {
        res.status(500).send("error");
        console.log(err);
    }

})

// Get individual restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM restaurants WHERE id = $1', [req.params.id]);
        res.status(200).json({
            status: 'success',
            result: 1,
            data: {
                restaurant: result.rows[0]
            }
        })
    } catch (err) {
        console.log(err.message);
    }

})

// Create a restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    try {
        const results = await db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range]);
        console.log(results);
        res.status(201).json({
            status: 'success',
            message: 'a new resturant was added',
            restaurant: results.rows[0]
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 'failed',
            message: 'Sever error! Try again later'
        })
    }
})

// Update a restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id]);
     
        res.status(201).json({
            status: 'success',
            message: 'Successfuly updated restaurant',
            restaurant: results.rows[0]
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 'failed',
            message: 'Sever error! Try again later'
        })
    }
})

// Delete a restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    try {
        const results = await db.query('DELETE FROM restaurants WHERE id = $1', [req.params.id]);

        res.status(202).json({
            status: 'success',
            message: 'Restaurant was deleted'
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 'failed',
            message: 'Sever error! Try again later'
        })
    }
})



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is up and listening on PORT: ${PORT}`);
})