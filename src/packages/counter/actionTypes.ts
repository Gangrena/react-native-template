import createActionType from '../../app/lib/createActionType'
import { NAME } from './constants'

export const INCREMENT = createActionType(NAME, 'increment')
export const DECREMENT = createActionType(NAME, 'decrement')
