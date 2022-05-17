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
        const response = await RestaurantFinder.get(`/${id}`);
        console.log(response.data.data);
        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className="text-center">{selectedRestaurant.restaurant.name}</h1>
          <div className='text-center'>
            {
              <>
                <StarRating rating={selectedRestaurant.restaurant.average_rating} />
                <span className='ml-2'>( {selectedRestaurant.restaurant.count ? selectedRestaurant.restaurant.count : 'No'} reviews )</span>
              </>
             }
          </div>
            {<Reviews reviews={selectedRestaurant.reviews} />}
            {<AddReview />}
        </>
      )}
    </div>
  )
}

export default RestaurantDetailPage