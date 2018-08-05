import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { send } from '../actions'
import { IPost } from '../../../types/Post'

interface IProps {
  send: (data: any) => void
}

export default (WrappedComponent: any) => {
  const mapStateToProps = ({
    post: { isLoading },
  }: {
    post: any
    fetching: boolean
  }) => ({
    isLoading,
  })

  const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ send }, dispatch)

  class PostHoc extends React.Component<IProps> {
    constructor(props: IProps) {
      super(props)
      this.state = {
        id: '',
        title: '',
        author: '',
      }
    }

    public onChange = (key: string, value: string) => {
      this.setState({ ...this.state, [key]: value })
    }

    private onSubmit = () => {
      this.props.send(this.state)
    }

    public render() {
      const { ...other } = this.props

      return (
        <WrappedComponent
          {...other}
          onChange={this.onChange}
          {...this.state}
          onSubmit={this.onSubmit}
        />
      )
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostHoc)
}
