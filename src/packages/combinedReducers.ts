import { combineReducers } from 'redux'

import routes from '../app/features/routes'
import intl from '../app/features/intl'
import counter from './counter'
import posts from './posts/modules/list'
import post from './posts/modules/form'

export default combineReducers({
  [counter.constants.NAME]: counter.reducer,
  [posts.constants.NAME]: posts.reducer,
  [post.constants.NAME]: post.reducer,
  [routes.constants.NAME]: routes.reducer,
  [intl.constants.NAME]: intl.reducer,
})
