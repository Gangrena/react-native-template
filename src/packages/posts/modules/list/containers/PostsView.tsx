import React from 'react'

import Post from '../components/PostView'
import getPosts from '../hocs/PostListHoc'
import { IPost } from '../../../types/Post'
import { Text, View, FlatList, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

const PostListView = ({
  posts,
  fetching,
}: {
  posts: IPost[]
  fetching: boolean
}) => {
  return (
    <View style={{ flex: 1 }}>
      {fetching ? (
        <Text>{'Loading ...'}</Text>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={item => String(item.id)}
        />
      )}
      <Button title="Add new post" onPress={Actions.postsAdd} />
    </View>
  )
}

export default getPosts(PostListView)
