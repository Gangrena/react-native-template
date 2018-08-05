import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Api from '../../../config/api'
import * as actionTypes from '../actionTypes'

export default function* addPost() {
  return yield takeLatest(actionTypes.SEND_STARTED, function*(action: any) {
    try {
      yield call(Api.post, action.payload)
      yield put({ type: actionTypes.SEND_SUCCESS })
    } catch (error) {
      yield put({ type: actionTypes.SEND_ERROR })
    }
  })
}
