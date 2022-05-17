import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
    // Context
    const { addRestaurant } = useContext(RestaurantsContext);
    // Controlled input states
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('Price Range');
    // Form submit funciton
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range: priceRange
            })
            
            addRestaurant(response.data.restaurant);
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className='mb-4'>
        <form >
            <div className="row text-center p-3">
                <div className="col-3">
                    <input type="text" name="name" placeholder='name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-3">
                      <input type="text" name="location" placeholder='location' className='form-control' value={location} onChange={e => setLocation(e.target.value)} />
                </div>
                <div className="col-3">
                      <select name="" className='form-select mr-sm-2' value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                        <option defaultValue='Price Range' disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <div className="col-3">
                      <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
                </div>
            </div>
        </form>

    </div>
  )
}

export default AddRestaurant