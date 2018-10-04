import { IPayload } from './types'

export const requestActionCreator = (
  type: string,
  payload: IPayload,
  meta: object
) => ({
  type,
  payload,
  meta: { ...meta, request: true },
})
