import { requestActionCreator, IPayload } from '../../middleware'

class RequestActionWrapper {
  private baseURL = ''

  constructor(baseUrl: string) {
    this.baseURL = baseUrl || ''
  }

  private assignPayloadMethod = (payload: IPayload, method: string) => ({
    ...payload,
    method,
  })

  public makeCall(type: string, payload: IPayload, meta?: any) {
    return requestActionCreator(
      type,
      {
        ...payload,
        baseURL: this.baseURL,
      },
      meta
    )
  }

  public get(type: string, payload: IPayload, meta?: any) {
    return this.makeCall.call(
      this,
      type,
      this.assignPayloadMethod(payload, 'get'),
      meta
    )
  }

  public post(type: string, payload: IPayload, meta?: any) {
    return this.makeCall.call(
      this,
      type,
      this.assignPayloadMethod(payload, 'post'),
      meta
    )
  }

  public put(type: string, payload: IPayload, meta?: any) {
    return this.makeCall.call(
      this,
      type,
      this.assignPayloadMethod(payload, 'put'),
      meta
    )
  }

  public delete(type: string, payload: IPayload, meta?: any) {
    return this.makeCall.call(
      this,
      type,
      this.assignPayloadMethod(payload, 'delete'),
      meta
    )
  }

  public static create(baseUrl: string) {
    return new RequestActionWrapper(baseUrl)
  }
}

export default RequestActionWrapper
