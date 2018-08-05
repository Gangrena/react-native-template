import { AsyncStorage } from 'react-native'
import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['posts'],
}

const enhanceForEnvironment = (func: StoreEnhancer) =>
  __DEV__ ? composeWithDevTools(func) : compose(func)

const configureStore = (rootReducer: any, rootSaga: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    persistReducer(config, rootReducer),
    enhanceForEnvironment(applyMiddleware(...[sagaMiddleware]))
  )
  sagaMiddleware.run(rootSaga)

  return {
    store,
    persistor: persistStore(store),
  }
}

export default configureStore
