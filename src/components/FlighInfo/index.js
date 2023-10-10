import React from 'react'

import FlightInfoItem from '../FlightInfoItem'

import styles from './FlightInfo.module.scss'

const FlightInfo = ({ price, segments, carrier }) => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <section className={styles.content}>
      <div className={styles.top}>
        <span className={styles.contentPrice}>{price} P</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png}`} />
      </div>
      <div className={styles.middle}>
        <FlightInfoItem segments={segments[0]} />
        <FlightInfoItem segments={segments[1]} />
      </div>
      <div className={styles.bottom}></div>
    </section>
  )
}

export default FlightInfo
