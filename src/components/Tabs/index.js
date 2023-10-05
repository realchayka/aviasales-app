import React, { useState } from 'react'

import styles from './Tabs.module.scss'
import CheapTabContent from './CheapTabContent'
import FastTabContent from './FastTabContent'
import OptimalTabContent from './OptimalTabContent'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Самый дешёвый')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }
  return (
    <section className={styles.tabs}>
      <div className={styles.tabHeader}>
        <button
          className={`${activeTab === 'самый дешевый' ? styles.activeTab : ''} ${styles.firstTab}`}
          onClick={() => handleTabClick('самый дешевый')}
        >
          Самый дешевый
        </button>
        <button
          className={activeTab === 'самый быстрый' ? styles.activeTab : ''}
          onClick={() => handleTabClick('самый быстрый')}
        >
          Самый быстрый
        </button>
        <button
          className={`${activeTab === 'оптимальный' ? styles.activeTab : ''} ${styles.lastTab}`}
          onClick={() => handleTabClick('оптимальный')}
        >
          Оптимальный
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'самый дешевый' && <CheapTabContent />}
        {activeTab === 'самый быстрый' && <FastTabContent />}
        {activeTab === 'оптимальный' && <OptimalTabContent />}
      </div>
    </section>
  )
}

export default Tabs
