import React from 'react'

import image from '../../assets/index'

import styles from './Logo.module.scss'

const Logo = () => {
  return <img className={styles.logo} src={image.logo} />
}

export default Logo
