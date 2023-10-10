import React from 'react'
import { connect } from 'react-redux'

import { toggleAll, toggleCheckbox } from '../../redux/reducers/filter/filterActions'

import styles from './Filter.module.scss'

export const Filter = ({ filter, toggleAll, toggleCheckbox }) => {
  const handleToggleAll = () => {
    toggleAll()
  }

  const handleToggleCheckbox = (checkboxName) => {
    toggleCheckbox(checkboxName)
  }

  return (
    <section className={styles.filter}>
      <p className={styles.text}>Количество пересадок</p>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id={'checkbox-1'}
          type="checkbox"
          onChange={handleToggleAll}
          checked={filter.all}
        />
        <label htmlFor={'checkbox-1'} className={styles.label}>
          Все
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id={'checkbox-2'}
          type="checkbox"
          onChange={() => handleToggleCheckbox('without')}
          checked={filter.without}
        />
        <label htmlFor={'checkbox-2'} className={styles.label}>
          Без пересадки
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id={'checkbox-3'}
          type="checkbox"
          onChange={() => handleToggleCheckbox('oneStep')}
          checked={filter.oneStep}
        />
        <label htmlFor={'checkbox-3'} className={styles.label}>
          1 пересадка
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id={'checkbox-4'}
          type="checkbox"
          onChange={() => handleToggleCheckbox('twoStep')}
          checked={filter.twoStep}
        />
        <label htmlFor={'checkbox-4'} className={styles.label}>
          2 пересадки
        </label>
      </div>
      <div className={styles.checkboxContainer}>
        <input
          className={styles.checkbox}
          id={'checkbox-5'}
          type="checkbox"
          onChange={() => handleToggleCheckbox('threeStep')}
          checked={filter.threeStep}
        />
        <label htmlFor={'checkbox-5'} className={styles.label}>
          3 пересадки
        </label>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  filter: state.filter,
})
const mapDispatchToProps = {
  toggleAll,
  toggleCheckbox,
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
