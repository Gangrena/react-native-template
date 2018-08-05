import { action } from 'typesafe-actions'

import { SEND_STARTED, SEND_SUCCESS, SEND_ERROR } from './actionTypes'
import { IPost } from '../../types/Post'

export const send = (data: IPost) => action(SEND_STARTED, data)

export const sendSuccess = (data: IPost) => action(SEND_SUCCESS, data)

export const sendFailed = (error: any) => action(SEND_ERROR, error)
