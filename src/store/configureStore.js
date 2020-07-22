import createSagaMiddleware from 'redux-saga'
import reducer from '../redux/reducers'
import {applyMiddleware, createStore} from "redux";

export default function configureStore(initialState) {
  const {createLogger} = require('redux-logger');
  const logger = createLogger({
    collapsed: true
  })
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, initialState, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run
  }
}
