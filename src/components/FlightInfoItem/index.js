import React from 'react'

import styles from './FlightInfoItem.module.scss'

const FlightInfoItem = () => {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div className={styles.middleElem}>
      <div className={styles.middleContainer}>
        <p>MOW – HKT</p>
        <p className={styles.time}>10:45 – 08:00</p>
      </div>
      <div className={styles.middleContainer}>
        <p>В пути</p>
        <p className={styles.time}>21ч 15м</p>
      </div>
      <div className={styles.middleContainer}>
        <p>2 пересадки</p>
        <p className={styles.time}>HKG, JNB</p>
      </div>
    </div>
  )
}

export default FlightInfoItem
