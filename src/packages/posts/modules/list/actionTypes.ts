import createActionType from '../../../../app/lib/createActionType'
import { NAME } from './constants'

export const FETCH_STARTED = createActionType(NAME, 'fetch started')
export const FETCH_SUCCESS = createActionType(NAME, 'fetch success')
export const FETCH_ERROR = createActionType(NAME, 'fetch error')
