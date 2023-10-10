/* eslint-disable no-debugger */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTickets } from '../../redux/reducers/tickets/ticketsActions'
import { setSorting } from '../../redux/reducers/sorting/sortingActions'

import styles from './Tabs.module.scss'
import CheapTabContent from './CheapTabContent'
import FastTabContent from './FastTabContent'
import OptimalTabContent from './OptimalTabContent'

const Tabs = ({ activeTab, setSorting, fetchTickets, tickets, loading, error, filter, sorting }) => {
  let filteredTickets = []
  const noFilterSelected = !filter.all && !filter.without && !filter.oneStep && !filter.twoStep && !filter.threeStep

  if (filter.all) {
    filteredTickets = tickets
  } else {
    if (filter.without) {
      const withoutTickets = tickets.filter((ticket) => {
        return ticket.segments.every((segment) => segment.stops.length === 0)
      })
      filteredTickets = filteredTickets.concat(withoutTickets)
    }

    if (filter.oneStep) {
      const oneStepTickets = tickets.filter((ticket) => {
        return ticket.segments.every((segment) => segment.stops.length === 1)
      })
      filteredTickets = filteredTickets.concat(oneStepTickets)
    }

    if (filter.twoStep) {
      const twoStepTickets = tickets.filter((ticket) => {
        return ticket.segments.every((segment) => segment.stops.length === 2)
      })
      filteredTickets = filteredTickets.concat(twoStepTickets)
    }

    if (filter.threeStep) {
      const threeStepTickets = tickets.filter((ticket) => {
        return ticket.segments.every((segment) => segment.stops.length === 3)
      })
      filteredTickets = filteredTickets.concat(threeStepTickets)
    }
  }
  if (sorting === 'самый дешевый') {
    filteredTickets.sort((a, b) => a.price - b.price)
  }
  if (sorting === 'самый быстрый') {
    filteredTickets.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
  }
  if (sorting === 'оптимальный') {
    filteredTickets
      .sort(
        (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
      )
      .sort((a, b) => a.price - b.price)
  }
  const handleTabClick = (tabName) => {
    setSorting(tabName)
  }

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

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
        {noFilterSelected && (
          <h2 className={styles.noFilterSelected}>Рейсов, подходящих под заданные фильтры, не найдено</h2>
        )}
        {activeTab === 'самый дешевый' && (
          <CheapTabContent allTickets={filteredTickets} loading={loading} error={error} />
        )}
        {activeTab === 'самый быстрый' && <FastTabContent allTickets={filteredTickets} />}
        {activeTab === 'оптимальный' && <OptimalTabContent allTickets={filteredTickets} />}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.sorting,
  tickets: state.tickets.tickets,
  loading: state.tickets.loading,
  error: state.tickets.error,
  filter: state.filter,
  sorting: state.sorting,
})
const mapDispatchToProps = {
  setSorting,
  fetchTickets,
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
