import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { fetchPostsContent } from '../actions'
import { IPost } from '../../../types/Post'

// tests
import { updateIntl } from '../../../../../app/features/intl/actions'

interface IProps {
  fetchPostsContent: () => void
  updateIntl: (cos: any) => void
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
    bindActionCreators({ fetchPostsContent, updateIntl }, dispatch)

  class PostListHoc extends React.Component<IProps> {
    constructor(props: IProps) {
      super(props)
      this.props.fetchPostsContent()
      this.props.updateIntl({ locale: 'pl' })
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
