import React from 'react'

const RestaurantMarker = (props) => {

  return (

    <div
      lat={props.lat}
      lng={props.lng}
      >

      <img className="restaurant-icon" src="/restauranticon.png" alt="restaurant" />
    </div>
  )

}

export default RestaurantMarker
