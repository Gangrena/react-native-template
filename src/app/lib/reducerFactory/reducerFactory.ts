import { cloneDeep } from 'lodash'
import { IAction } from '../../middleware/index'

import initialState from './initialState'
import { IPayload } from '../../middleware/types'

const reducerFactory = ({
  baseActionName,
  baseInitialState = cloneDeep(initialState),
  additionalActions = {},
  onFulfilledHandler = payload => payload.data,
  onRejectedHandler = payload => payload,
}: {
  baseActionName: string
  baseInitialState?: any
  additionalActions?: any
  onFulfilledHandler?: (payload: IPayload) => any
  onRejectedHandler?: (payload: IPayload) => IPayload
}) => {
  const actions = {
    [`${baseActionName}_PENDING`]: (state: any) => ({
      ...state,
      intact: false,
      fetching: true,
    }),
    [`${baseActionName}_FULFILLED`]: (state: any, action: IAction) => ({
      ...state,
      fetching: false,
      data: onFulfilledHandler(action.payload),
      error: null,
    }),
    [`${baseActionName}_REJECTED`]: (state: any, action: IAction) => ({
      ...state,
      fetching: false,
      data: null,
      error: onRejectedHandler(action.payload),
    }),
    [`${baseActionName}_CANCELLED`]: (state: any) => ({
      ...state,
      fetching: false,
    }),
    [`${baseActionName}_RESET`]: () => cloneDeep(baseInitialState),
  }

  Object.assign(actions, additionalActions)

  return (state = baseInitialState, action: IAction) => {
    let result

    if (action.type in actions) {
      result = actions[action.type](state, action)
    } else {
      result = { ...state }
    }

    return result
  }
}

export { reducerFactory }
