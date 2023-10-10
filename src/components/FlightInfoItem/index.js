import React from 'react'
import { addMinutes, format, parseISO } from 'date-fns'

import styles from './FlightInfoItem.module.scss'

const FlightInfoItem = (props) => {
  const { origin, destination, stops, date, duration } = props.segments
  // eslint-disable-next-line react/no-unescaped-entities
  const parseStartDate = parseISO(date)
  const endDate = addMinutes(parseStartDate, duration)
  const endTime = format(endDate, 'HH:mm')
  const startTime = format(parseStartDate, 'HH:mm')

  const durationInMinutes = duration

  const hours = Math.floor(durationInMinutes / 60)
  const minutes = duration % 60

  let stopsText
  if (stops.length === 0) {
    stopsText = 'Без пересадок'
  } else if (stops.length === 1) {
    stopsText = '1 пересадка'
  } else {
    stopsText = `${stops.length} пересадки`
  }
  return (
    <div className={styles.middleElem}>
      <div className={styles.middleContainer}>
        <p>
          {origin} – {destination}
        </p>
        <p className={styles.time}>
          {startTime} – {endTime}
        </p>
      </div>
      <div className={styles.middleContainer}>
        <p>В пути</p>
        <p className={styles.time}>
          {hours} <span className={styles.span}>ч</span> {minutes} <span className={styles.span}>м</span>
        </p>
      </div>
      <div className={styles.middleContainer}>
        <p>{stopsText}</p>
        <p className={styles.time}>
          {stops.map((item, index) => (
            <span key={index}>{item} </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default FlightInfoItem
