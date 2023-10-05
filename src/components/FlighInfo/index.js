import React from 'react'

import FlightInfoItem from '../FlightInfoItem'
import image from '../../assets/index'

import styles from './FlightInfo.module.scss'

const FlightInfo = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <section className={styles.content}>
      <div className={styles.top}>
        <span className={styles.contentPrice}>13 400 Р </span>
        <img src={image.logoAvia} />
      </div>
      <div className={styles.middle}>
        <FlightInfoItem />
        <FlightInfoItem />
      </div>
      <div className={styles.bottom}></div>
    </section>
  )
}

export default FlightInfo
