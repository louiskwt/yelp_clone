import React, { useContext, useEffect } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantFinder.get("/")
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData();

  }, [])

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
                    <tr key={restaurant.id}>
                      <th scope='row'>{restaurant.name}</th>
                      <td>{restaurant.location}</td>
                      <td>{"$".repeat(restaurant.price_range)}</td>
                      <td>Rating</td>
                      <td><button className='btn btn-warning'>Edit</button></td>
                      <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                )
              })}
            </tbody>
        </table>

    </div>
  )
}

export default RestaurantList