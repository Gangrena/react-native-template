import handleReduxAction from '../../app/lib/handleReduxAction'
import { ActionConst } from 'react-native-router-flux'

export interface IRoutesState {
  scene: string
}

const actions = {
  [ActionConst.FOCUS]: (state: IRoutesState, action: any) => ({
    ...state,
    scene: action.params.routeName,
  }),
}

export default (state: IRoutesState = { scene: '' }, action: any) =>
  handleReduxAction(actions, state, action)
