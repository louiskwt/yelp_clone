import axios from 'axios';

// use NODE_ENV to dictate the baseURL
// NODE_ENV = 'development' || 'production'
// if in production baseURL = /api/v1/restaurants
// else baseURL = localhost
// const baseURL = "http://localhost:8000/api/v1/restaurants"

const baseURL = process.env.NODE_ENV === 'production' ? 'api/v1/restaurants' : 'http://localhost:8000/api/v1/restaurants';

export default axios.create({
    baseURL,
})