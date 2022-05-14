import React from 'react'

const AddRestaurant = () => {
  return (
    <div className='mb-4'>
        <form >
            <div className="row text-center p-3">
                <div className="col-3">
                    <input type="text" name="name" placeholder='name' className='form-control' />
                </div>
                <div className="col-3">
                    <input type="text" name="location" placeholder='location' className='form-control' />
                </div>
                <div className="col-3">
                    <select name="" id="" className='form-select mr-sm-2'>
                        <option disabled>Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <div className="col-3">
                      <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>

    </div>
  )
}

export default AddRestaurant