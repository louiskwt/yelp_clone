import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);

    const value = {
        restaurants,
        setRestaurants
    }

    return (
        <RestaurantsContext.Provider value={value}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}