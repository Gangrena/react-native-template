import React, { Component } from 'react'
import { Router, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps {
  dispatch: Dispatch
  children: React.ReactChildren
}

class AppRouter extends Component<any, IProps> {
  private reducerCreate = (params: any) => (state: any, action: any) => {
    this.props.dispatch(action)
    return new Reducer(params)(state, action)
  }

  public render() {
    return <Router createReducer={this.reducerCreate} {...this.props} />
  }
}

export default connect()(AppRouter)
