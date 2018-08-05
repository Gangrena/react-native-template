import React from 'react'
import { View, Text, Button } from 'react-native'
import { increment, decrement } from '../actions'

export interface IProps {
  counter: number
  increment: () => any
  decrement: () => any
}

const Counter: React.SFC<IProps> = props => (
  <View>
    <Text>{props.counter}</Text>
    <View>
      <Button onPress={props.increment} title="INCREMENT" />
      <Button onPress={props.decrement} title="DECREMENT" />
    </View>
  </View>
)

export default Counter
