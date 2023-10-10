import { combineReducers } from 'redux'

import sortingReducer from './sorting/sortingReducer'
import filterReducer from './filter/filterReducer'
import ticketsReducer from './tickets/ticketsReducer'

const rootReducer = combineReducers({
  sorting: sortingReducer,
  filter: filterReducer,
  tickets: ticketsReducer,
})

export default rootReducer
