import { Dispatch } from 'redux'
import axios from 'axios'
import { isNil, get, omit } from 'lodash'
import { IPayload, IAction } from './types'

export const PENDING = 'PENDING'
export const FULFILLED = 'FULFILLED'
export const REJECTED = 'REJECTED'
export const CANCEL_REQUEST = 'CANCEL_REQUEST'
export const CANCELLED = 'CANCELLED'

const CANCEL_REQUEST_REGEX = /_CANCEL_REQUEST$/

let cancelSourceBucket: { [key: string]: any } = {}

function clearCancelSourceBucket(): void {
  cancelSourceBucket = {}
}

function manageCancelToken(dispatch: Dispatch, type: string): any {
  cancelSourceBucket[type] = axios.CancelToken.source()
  return cancelSourceBucket[type]
}

function cancelRequest(dispatch: Dispatch, type: string): void {
  if (!isNil(cancelSourceBucket[type])) {
    cancelSourceBucket[type].cancel('Operation has been cancelled.')
    delete cancelSourceBucket[type]
    dispatch({ type: `${type}_${CANCELLED}` })
  }
}

const checkIfIsRegularAction = (action: IAction): boolean => {
  const request = get(action, 'meta.request')
  return isNil(request) || false === request
}

function handleResponse(
  { dispatch, type, meta }: { dispatch: Dispatch; type: string; meta: any },
  positiveResult: boolean = false,
  value: any
) {
  let desiredType
  let desiredAction

  // cancel action should be already dispatched
  // there is no need to do it one moar time
  if (!axios.isCancel(value)) {
    desiredType = positiveResult ? FULFILLED : REJECTED
    desiredAction = {
      type: `${type}_${desiredType}`,
      payload: value,
      meta: omit(meta, ['request']),
    }

    dispatch(desiredAction)
  }

  return value
}

const checkIfUserCanPerformRequest = (state: any, action: IAction): boolean => {
  // const user = getUserDetails(state)
  // const { needsV4Auth, needsV5Auth } = action.payload
  // let result = true

  // if ((true === needsV4Auth || true === needsV5Auth) && false === user.logged) {
  //   result = false
  // }

  return true
}

const requestActionMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch
  getState: () => any
}) => (next: (action: IAction) => any) => (action: IAction) => {
  try {
    const state = getState()
    const { type, payload, meta } = action
    const { url, method, data, headers, baseURL, cancelPrevious }: IPayload =
      payload || {}
    let promise
    let positivePromiseHandler
    let cancelSource

    // for cancel action
    if (CANCEL_REQUEST_REGEX.test(type)) {
      cancelRequest(dispatch, type.replace(`_${CANCEL_REQUEST}`, ''))
      // for regulat action
    } else if (checkIfIsRegularAction(action)) {
      next(action)
      // for request
    } else {
      if (checkIfUserCanPerformRequest(state, action)) {
        // if (true === needsV4Auth && true === user.logged) {
        //   headers['Authorization'] = `${getAuthV4Token(state)}`
        // }

        // if (true === needsV5Auth && true === user.logged) {
        //   headers['Authorization'] = `Bearer ${getAuthV5Token(state)}`
        // }

        // cancel previous request if need
        if (true === cancelPrevious) {
          cancelRequest(dispatch, type)
        }

        cancelSource = manageCancelToken(dispatch, type)

        promise = axios(url, {
          method,
          data,
          headers,
          baseURL,
          cancelToken: cancelSource.token,
        })

        dispatch({
          type: `${type}_${PENDING}`,
          payload: promise,
          meta: omit(meta, ['request']),
        })
        positivePromiseHandler = handleResponse.bind(
          null,
          { dispatch, type, meta },
          true
        )

        promise
          .then(positivePromiseHandler)
          .catch(handleResponse.bind(null, { dispatch, type, meta }, false))

        return promise
      } else {
        // TODO: add some notification, i.e. toaster
        console.warn(
          'You can not start authorized request while not being logged.'
        )

        // TODO agree with BE how errors should looks like for v5
        return Promise.reject({
          error: 'Dana funkcjonalność wymaga zalogowania',
        }).catch(handleResponse.bind(null, { dispatch, type, meta }, false))
      }
    }
  } catch (ex) {
    console.error('ERROR - requestActionMiddleware', ex)
    return ex
  }
}

export {
  handleResponse,
  checkIfIsRegularAction,
  checkIfUserCanPerformRequest,
  clearCancelSourceBucket,
}
export default requestActionMiddleware
