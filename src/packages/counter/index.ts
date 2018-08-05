import reducer from './reducer'
import { NAME } from './constants'
import CounterScene from './scenes/CounterScene'

export default {
  reducer,
  scenes: {
    CounterScene,
  },
  constants: {
    NAME,
  },
}
