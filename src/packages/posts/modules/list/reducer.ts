import { ActionType } from 'typesafe-actions'

import asyncReducerFactory from '../../../../app/lib/asyncReducerFactory'
import {
  createState,
  createWrappedState,
} from '../../../../app/lib/stateFactory'

import handleReduxAction from '../../../../app/lib/handleReduxAction'
import * as actionsTypes from './actions'
import { FETCH_SUCCESS, FETCH_STARTED, FETCH_ERROR } from './actionTypes'
import { IPost } from '../../types/Post'

export default asyncReducerFactory(
  'posts',
  'FETCH',
  createWrappedState([], { dupa: 'dupa', asf: 'asf' })
)
