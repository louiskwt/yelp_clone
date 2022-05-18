const express = require('express');
const { getAllRestaurants, getOneRestaurant, createRestaurant, updateRestaurant, deleteRestaurant, addReview  } = require('../controllers/restaurantControllers');

const router = express.Router();

// GET all restaurants
router.get('/api/v1/restaurants', getAllRestaurants)

// Get individual restaurant
router.get('/api/v1/restaurants/:id', getOneRestaurant)

// Create a restaurant
router.post('/api/v1/restaurants', createRestaurant)

// Update a restaurant
router.put('/api/v1/restaurants/:id', updateRestaurant)

// Delete a restaurant
router.delete('/api/v1/restaurants/:id', deleteRestaurant)

// add review
router.post("/api/v1/restaurants/:id/addReview", addReview)

module.exports = router