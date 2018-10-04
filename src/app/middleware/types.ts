export interface IPayload {
  url: string
  method?: string
  data?: any
  headers?: any
  baseURL?: string
  cancelPrevious?: boolean
}

export interface IAction {
  type: string
  payload: IPayload
  meta?: any
}
