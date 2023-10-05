import React from 'react'

import styles from './Filter.module.scss'

export const Filter = () => {
  const checkboxes = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

  return (
    <section className={styles.filter}>
      <p className={styles.text}>Количество пересадок</p>
      {checkboxes.map((label, index) => (
        <div className={styles.checkboxContainer} key={index}>
          <input id={`checkbox-${index}`} type="checkbox" />
          <label className={styles.label} htmlFor={`checkbox-${index}`}>
            {label}
          </label>
        </div>
      ))}
    </section>
  )
}

export default Filter
