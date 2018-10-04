import { persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import handleReduxAction from '../../lib/handleReduxAction'
import { IntlAction, IntlState } from './types'
import { INTL_UPDATE } from './actions'
import {
  getLocale,
  getMessages,
  availableLocales,
} from '../../../utils/localeHelper'

export const initialState = {
  locale: getLocale(),
  messages: getMessages(),
  availableLocales,
}

const actions = {
  [INTL_UPDATE]: (state: IntlState, { payload }: { payload: IntlState }) => ({
    ...state,
    ...payload,
  }),
}

const config = {
  key: 'intl',
  storage: AsyncStorage,
}

export default persistReducer(
  config,
  (state: IntlState = initialState, action: IntlAction) =>
    handleReduxAction(actions, state, action)
)
