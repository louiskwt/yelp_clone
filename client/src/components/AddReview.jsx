import React, {useState} from 'react'

const AddReview = () => {
    const [name, setName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState('Rating');
  return ( 
    <div className='mb-2'>
        <form>
            <div className="row mb-4">
                <div className="form-group col-8">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Your Name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="rating">Rating</label>
                      <select className='form-select' id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <option value="Rating" selected disabled>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="Review">Review</label>
                <textarea name="Review" id="" cols="30" rows="10" className="form-control" placeholder='Add your review' value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
            </div>
            <button className="btn btn-primary">Sumbit</button>
        </form>
    </div>
  )
}

export default AddReview