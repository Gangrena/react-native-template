import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LG from 'react-native-linear-gradient'

import { colors } from '../../../styles/common'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
})

interface IProps {
  name: string
  title: string
}

class DrawerContent extends React.Component<IProps> {
  public render() {
    return (
      <LG
        colors={[colors.COLOR_JACARTA, colors.COLOR_SAN_MARINO]}
        style={styles.container}
      >
        <Button title="home" onPress={() => Actions.popTo('home')} />
        <Button title="counter" onPress={Actions.counter} />
        <Button title="posts" onPress={Actions.postsRoot} />
      </LG>
    )
  }
}

export default DrawerContent
