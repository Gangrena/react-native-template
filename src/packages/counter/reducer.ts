import { ActionType } from 'typesafe-actions'

import handleReduxAction from '../../app/lib/handleReduxAction'
import * as actionsTypes from './actions'
import { DECREMENT, INCREMENT } from './actionTypes'

export interface ICounterState {
  counter: number
}

export type CounterAction = ActionType<typeof actionsTypes>

const actions = {
  [INCREMENT]: (state: ICounterState) => {
    return { ...state, counter: state.counter + 1 }
  },
  [DECREMENT]: (state: ICounterState) => {
    return { ...state, counter: state.counter - 1 }
  },
}

export default (state: ICounterState = { counter: 0 }, action: CounterAction) =>
  handleReduxAction(actions, state, action)
