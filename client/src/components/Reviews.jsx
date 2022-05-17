import React from 'react'
import StarRating from './StarRating'

const Reviews = () => {
  return (
    <div className='row row-col-3 mb-3 mt-5'>
        <div className="card bg-light mb-3 mr-3 p-0" style={{ maxWidth: '30%', marginRight: '2rem', marginBottom: '1rem'}}>
              <div className="card-header d-flex justify-content-between">
                    <span>Joan</span>
                    <span><StarRating rating={3} /></span>
            </div>
            <div className="card-body">
                <p className="card-text">
                    This place was awesome!
                </p>
            </div>
        </div>
        <div className="card bg-light mb-3 mr-3 p-0" style={{ maxWidth: '30%', marginRight: '2rem', marginBottom: '1rem'}}>
              <div className="card-header d-flex justify-content-between">
                    <span>Joan</span>
                    <span><StarRating rating={3} /></span>
            </div>
            <div className="card-body">
                <p className="card-text">
                    This place was awesome!
                </p>
            </div>
        </div>
        <div className="card bg-light mb-3 mr-3 p-0" style={{ maxWidth: '30%', marginRight: '2rem', marginBottom: '1rem'}}>
              <div className="card-header d-flex justify-content-between">
                    <span>Joan</span>
                    <span><StarRating rating={3} /></span>
            </div>
            <div className="card-body">
                <p className="card-text">
                    This place was awesome!
                </p>
            </div>
        </div>
        <div className="card bg-light mb-3 mr-3 p-0" style={{ maxWidth: '30%', marginRight: '2rem', marginBottom: '1rem'}}>
              <div className="card-header d-flex justify-content-between">
                    <span>Joan</span>
                    <span><StarRating rating={3} /></span>
            </div>
            <div className="card-body">
                <p className="card-text">
                    This place was awesome!
                </p>
            </div>
        </div>
    
    </div>
  )
}

export default Reviews