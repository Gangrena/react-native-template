import { persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import { reducerFactory } from '../../../../app/lib/reducerFactory'
import { POSTS_FETCH_CONTENT } from './actions'

const config = {
  key: 'test2',
  storage: AsyncStorage,
}

export default persistReducer(
  config,
  reducerFactory({
    baseActionName: POSTS_FETCH_CONTENT,
  })
)
