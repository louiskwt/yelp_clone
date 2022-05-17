import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  const { id } = useParams();

  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respnse = await RestaurantFinder.get(`/${id}`);
        console.log(respnse);
        setSelectedRestaurant(respnse.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <h1 className="text-center">{selectedRestaurant && selectedRestaurant.restaurant.name}</h1>
      <div className='text-center'>
        {selectedRestaurant && <StarRating rating={3.5}/>}
      </div>
      {selectedRestaurant && <Reviews reviews={selectedRestaurant.reviews} />}
      {selectedRestaurant && <AddReview />}
    </div>
  )
}

export default RestaurantDetailPage