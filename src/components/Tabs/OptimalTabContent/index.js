/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

import FlightInfo from '../../FlighInfo'
import Button from '../../Button'
import Spin from '../../Spin'

const OptimalTabContent = ({ allTickets, loading, error }) => {
  const [visibleTickets,setVisibleTickets ] = useState(5)
  const loadMoreTickets = () => {
    setVisibleTickets((prevState) => prevState + 5)
  }

  if(loading) {
    return <Spin />
  }

  if (error) {
    return <h2>Произошла ошибка получения данных</h2>
  }
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <>
      {allTickets.slice(0, visibleTickets).map((ticket, index) => (
        <FlightInfo key={index} {...ticket} />
      ))}
      {visibleTickets < allTickets.length && <Button onClick={loadMoreTickets} />}
    </>
  )
}

export default OptimalTabContent
