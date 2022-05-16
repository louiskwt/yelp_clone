import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respnse = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(respnse.data.data.restaurant);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="text-center">{selectedRestaurant && selectedRestaurant.name}</h1>
    </div>
  )
}

export default RestaurantDetailPage