import React from 'react'

import Filter from '../Filter'
import Tabs from '../Tabs'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <section className={styles.main}>
      <Filter />
      <Tabs />
    </section>
  )
}

export default Main
