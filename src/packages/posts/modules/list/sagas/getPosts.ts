import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import Api from '../../../config/api'
import * as actionTypes from '../actionTypes'

export default function* getPosts() {
  return yield takeLatest(actionTypes.FETCH_STARTED, function*() {
    try {
      const posts = yield call(Api.getAll)
      yield put({ type: actionTypes.FETCH_SUCCESS, payload: posts.data })
    } catch (error) {
      yield put({ type: actionTypes.FETCH_ERROR, payload: error })
    }
  })
}
