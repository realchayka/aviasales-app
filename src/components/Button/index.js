import React from 'react'

import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={styles.button} {...props}>
      Показать еще 5 билетов!
    </button>
  )
}

export default Button
