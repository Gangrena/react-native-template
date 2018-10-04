import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { FormattedMessage } from 'react-intl'
import { Actions } from 'react-native-router-flux'

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
  public renderButton = (title: string, action: () => void) => {
    return (
      <TouchableOpacity onPress={action}>
        <FormattedMessage id={title} />
      </TouchableOpacity>
    )
  }
  public render() {
    return (
      <View>
        {this.renderButton('home', () => Actions.popTo('home'))}
        {this.renderButton('counter', Actions.counter)}
        {this.renderButton('posts', Actions.postsRoot)}
        {this.renderButton('settings', Actions.settingsRoot)}
      </View>
    )
  }
}

export default DrawerContent
