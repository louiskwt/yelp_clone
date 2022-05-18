const db = require('../db');

exports.getAllRestaurants = async (req, res) => {
    try {
        const results = await db.query('SELECT * from restaurants left join (SELECT restaurant_id, count(*), trunc(avg(rating), 1) as average_rating from reviews group by restaurant_id) reviews on id = reviews.restaurant_id;');

        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows
            }
        })
    } catch (err) {
        res.status(500).send("error");
        console.log(err);
    }

}

exports.getOneRestaurant = async (req, res) => {
    try {
        const restaurant = await db.query('SELECT * from restaurants left join (SELECT restaurant_id, count(*), trunc(avg(rating), 1) as average_rating from reviews group by restaurant_id) reviews on id = reviews.restaurant_id where id = $1;', [req.params.id]);
        const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [req.params.id]);

        res.status(200).json({
            status: 'success',
            result: 1,
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            }
        })
    } catch (err) {
        console.log(err.message);
    }

}

exports.createRestaurant = async (req, res) => {
    try {
        const results = await db.query('INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range]);
        console.log(results);
        res.status(200).json({
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
}

exports.updateRestaurant = async (req, res) => {
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
}

exports.deleteRestaurant = async (req, res) => {
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
}

// Add review
exports.addReview = async (req, res) => {
    try {
        const newReview = await db.query('INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;', [req.params.id, req.body.name, req.body.review, req.body.rating]);

        res.status(201).json({
            status: 'success',
            review: newReview.rows[0]
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status: 'failure',
            message: 'Something went wrong'
        })
    }
}