import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from "react-router-dom";
import StarRating from './StarRating';

const RestaurantList = () => {
  // State and functions from Context
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  // set up useHistory for routing
  let navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantFinder.get("/")
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData();

  }, [])

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      console.log(response)
      setRestaurants(restaurants.filter(restaruant => {
        return restaruant.id !== id;
      }));
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }
  
  const handleRestaurantSelect = (id) => {
    navigate(`/restaurants/${id}`);
  }

  const renderRestarantRating = (restaurant) => {
    if(!restaurant.count) {
      return (
        <div>
          <span>0 reviews</span>
        </div>
      ) 
    }
    return (
      <div key={restaurant.id}>
        <StarRating rating={restaurant.average_rating} />
        <span >({restaurant.count} reviews)</span>
      </div>
    )
  }

  return (
    <div className='list-group p-3'>
        <table className="table">
            <thead>
                <tr>
                    <th scope='col'>Restaurant</th>
                    <th scope='col'>Location</th>
                    <th scope='col'>Price Range</th>
                    <th scope='col'>Rating</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
              {restaurants && restaurants.map(restaurant => {
                return (
                    <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                      <th className='restaurant-link' scope='row'>{restaurant.name}</th>
                      <td>{restaurant.location}</td>
                      <td>{"$".repeat(restaurant.price_range)}</td>
                      <td>{renderRestarantRating(restaurant)}</td>
                    <td><button className='btn btn-warning' onClick={(e) => handleUpdate(e, restaurant.id)}>Edit</button></td>
                      <td><button className='btn btn-danger' onClick={(e)=> handleDelete(e, restaurant.id)}>Delete</button></td>
                    </tr>
                )
              })}
            </tbody>
        </table>

    </div>
  )
}

export default RestaurantList