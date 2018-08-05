import React from 'react'
import { View, Text } from 'react-native'
import { IPost } from '../../../types/Post'

export default ({ id, title, author }: IPost) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <Text>{id}</Text>
    <Text>{title}</Text>
    <Text>{author}</Text>
  </View>
)
