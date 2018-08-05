import PostAddScene from './scenes/PostAddScene'
import addPost from './sagas/addPost'
import reducer from './reducer'
import { NAME } from './constants'

export default {
  scenes: {
    PostAddScene,
  },
  reducer,
  sagas: {
    addPost,
  },
  constants: {
    NAME,
  },
}
