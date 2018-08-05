import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { fetch } from '../actions'
import { IPost } from '../../../types/Post'

interface IProps {
  fetch: () => void
}

export default (WrappedComponent: any) => {
  const mapStateToProps = ({
    posts: { data, fetching },
  }: {
    posts: { data: IPost[]; fetching: boolean }
  }) => ({
    posts: data,
    fetching,
  })

  const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ fetch }, dispatch)

  class PostListHoc extends React.Component<IProps> {
    constructor(props: IProps) {
      super(props)
      this.props.fetch()
    }

    public render() {
      const { ...other } = this.props

      return <WrappedComponent {...other} />
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostListHoc)
}
