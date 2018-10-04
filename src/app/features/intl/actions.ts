import createActionType from '../../lib/createActionType'
import { IntlAction, IntlState } from './types'
import { NAME } from './constants'

export const INTL_UPDATE = createActionType(NAME, 'update')

export const updateIntl = (opts: IntlState): IntlAction => ({
  type: INTL_UPDATE,
  payload: { ...opts },
})
