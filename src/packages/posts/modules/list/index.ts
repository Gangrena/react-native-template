import PostListScene from './scenes/PostListScene'
import reducer from './reducer'
import getPosts from './sagas/getPosts'
import { NAME } from './constants'

export default {
  scenes: {
    PostListScene,
  },
  sagas: {
    getPosts,
  },
  reducer,
  constants: {
    NAME,
  },
}
