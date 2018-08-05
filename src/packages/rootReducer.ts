import { combineReducers } from 'redux'
import counter from './counter'
import routes from './routes'
import posts from './posts/modules/list'
import post from './posts/modules/form'

export default combineReducers({
  [counter.constants.NAME]: counter.reducer,
  [routes.constants.NAME]: routes.reducer,
  [posts.constants.NAME]: posts.reducer,
  [post.constants.NAME]: post.reducer,
})
