import { ActionConst } from 'react-native-router-flux'

import handleReduxAction from '../../lib/handleReduxAction'
import { IRoutesState } from './types'

const actions = {
  [ActionConst.FOCUS]: (state: IRoutesState, action: any) => ({
    ...state,
    scene: action.params.routeName,
  }),
}

export default (state: IRoutesState = { scene: '' }, action: any) =>
  handleReduxAction(actions, state, action)
