import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
    const { id } = useParams();
    
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);

                setName(response.data.data.restaurant.name);
                setLocation(response.data.data.restaurant.location);
                setPriceRange(response.data.data.restaurant.price_range);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchRestaurant();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange
        })

        navigate('/');
    }

  return (
    <div>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" className='form-control' value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" name="" id="location" className='form-control' value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="price_range">Price Range</label>
            <input type="number" name="" id="price_range" className='form-control' value={priceRange} onChange={e => setPriceRange(e.target.value)}/>
        </div>
        <button className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UpdateRestaurant