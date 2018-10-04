import { Dispatch } from 'redux'

import createActionType from '../../../../app/lib/createActionType'
import { NAME } from './constants'
import { ApiService } from '../../../../app/services/Data'

export const POSTS_FETCH_CONTENT = createActionType(NAME, 'fetch content')

export const fetchPostsContent = () => (dispatch: Dispatch) => {
  dispatch(
    ApiService.get(POSTS_FETCH_CONTENT, {
      url: '/posts',
    })
  )
}
