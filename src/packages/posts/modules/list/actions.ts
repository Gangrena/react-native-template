import { action } from 'typesafe-actions'

import { FETCH_ERROR, FETCH_SUCCESS, FETCH_STARTED } from './actionTypes'
import { IPost } from '../../types/Post'

export const fetch = () => action(FETCH_STARTED)

export const fetchSuccess = (data: IPost) => action(FETCH_SUCCESS, data)

export const fetchFailed = (error: any) => action(FETCH_ERROR, error)
