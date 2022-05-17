import React from 'react'
import StarRating from './StarRating'

const Reviews = ({ reviews }) => {
  return (
    <div className='row row-col-3 mb-3 mt-5'>
        {reviews.map((review) => {
            return (
                    <div key={review.id} className="card bg-light mb-3 mr-3 p-0" style={{ maxWidth: '30%', marginRight: '2rem', marginBottom: '1rem' }}>
                        <div className="card-header d-flex justify-content-between">
                            <span>{review.name}</span>
                            <span><StarRating rating={review.rating} /></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                {review.review}
                            </p>
                        </div>
                    </div>
            )
        })}
       
    
    </div>
  )
}

export default Reviews