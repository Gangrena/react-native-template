import createActionType from '../../../../app/lib/createActionType'
import { NAME } from './constants'

export const SEND_STARTED = createActionType(NAME, 'send started')
export const SEND_SUCCESS = createActionType(NAME, 'send success')
export const SEND_ERROR = createActionType(NAME, 'send error')
