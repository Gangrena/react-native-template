import React, { Component } from 'react'
import { Router, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

interface IProps {
  dispatch: Dispatch
}

class AppRouter extends Component<IProps, any> {
  private reducerCreate = (params: any) => {
    return (state: any, action: any) => {
      this.props.dispatch(action)
      return new Reducer(params)(state, action)
    }
  }

  public render() {
    return (
      <Router createReducer={this.reducerCreate}>{this.props.children}</Router>
    )
  }
}

export default connect()(AppRouter)
