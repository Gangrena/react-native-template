import createActionType from './createActionType'

import handleReduxAction from './handleReduxAction'

const actionTypes = {
  STARTED: 'started',
  SUCCESS: 'success',
  ERROR: 'error',
}

const wrapReduxActions = (module: string, type: string, reductors: any) => ({
  [createActionType(module, `${type} ${actionTypes.STARTED}`)]: (
    state: any
  ) => ({
    ...state,
    isLoading: true,
    error: '',
  }),
  [createActionType(module, `${type} ${actionTypes.SUCCESS}`)]: (
    state: any,
    { payload }: any
  ) => ({
    ...state,
    data: payload || state.data,
    isLoading: false,
    error: '',
  }),
  [createActionType(module, `${type} ${actionTypes.ERROR}`)]: (
    state: any,
    { payload }: any
  ) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
  ...reductors,
})

export default <S>(
  domainName: string,
  type: string,
  stateFields: S,
  reductors: any = {}
) => (state: S = stateFields, action: any) =>
  handleReduxAction(
    wrapReduxActions(domainName, type, reductors),
    state,
    action
  )
