import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default (props: any) => {
  return (
    <View>
      <TextInput
        value={props.id}
        onChangeText={target => props.onChange('id', target)}
      />
      <TextInput
        value={props.title}
        onChangeText={value => props.onChange('title', value)}
      />
      <TextInput
        value={props.author}
        onChangeText={value => props.onChange('author', value)}
      />
      <Button
        title="Send"
        onPress={props.onSubmit}
        disabled={props.isLoading}
      />
    </View>
  )
}
