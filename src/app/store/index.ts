import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { requestActionMiddleware } from '../../app/middleware'

import combinedReducers from '../../packages/combinedReducers'

const enhanceForEnvironment = (func: StoreEnhancer) =>
  __DEV__ ? composeWithDevTools(func) : compose(func)

const store = createStore(
  combinedReducers,
  enhanceForEnvironment(
    applyMiddleware(...[thunkMiddleware, requestActionMiddleware])
  )
)

const persistor = persistStore(store)

export { store, persistor }
