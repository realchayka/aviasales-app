import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers/rootReducer'
import App from './App'

import './assets/globals/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
