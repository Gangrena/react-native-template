import { Action } from 'redux'

export interface IntlState {
  locale: string
  messages: any
}

export interface IntlAction extends Action {
  payload?: IntlState
}
