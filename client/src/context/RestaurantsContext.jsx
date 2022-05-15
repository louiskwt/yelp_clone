import React, { useState, createContext } from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurant = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    const value = {
        restaurants,
        setRestaurants,
        addRestaurant
    }

    return (
        <RestaurantsContext.Provider value={value}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}