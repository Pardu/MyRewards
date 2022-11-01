/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './src/reducers'

import App from './src/App'
import { name as appName } from './app.json'

const store = createStore(rootReducer, applyMiddleware(thunk))

const reduxApp = () => <Provider store={store}>
  <App />
</Provider>

AppRegistry.registerComponent(appName, () => reduxApp)
