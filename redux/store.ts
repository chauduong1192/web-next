import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

import { reducerRegistry } from './reducer-registry'

import './common'
import './todo'

const configureStoreEnhancers = () => {
  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production') {
    if (typeof window !== 'undefined') {
      composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers
    }
  }

  const enhancers = composeEnhancers(applyMiddleware(reduxThunk))

  return enhancers
}

const configureStore = (initialState?: any) => {
  const registeredReducers = reducerRegistry.getCombinedReducers(initialState)
  const reducers = combineReducers(registeredReducers)

  const enhancers = configureStoreEnhancers()

  const store = createStore(reducers, initialState, enhancers)

  reducerRegistry.setChangeListener(() => {
    store.replaceReducer(combineReducers(reducerRegistry.getCombinedReducers()))
  })

  return store
}

export default configureStore
