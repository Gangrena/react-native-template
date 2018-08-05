import postList from './posts/modules/list'
import postForm from './posts/modules/form'
import { fork, all } from 'redux-saga/effects'

export function* rootSaga() {
  yield all([fork(postList.sagas.getPosts), fork(postForm.sagas.addPost)])
}
