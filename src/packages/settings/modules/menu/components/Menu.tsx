import React from 'react'
import { Actions } from 'react-native-router-flux'
import { View, Button } from 'react-native'

const Menu = () => (
  <View>
    <Button title="language" onPress={Actions.language} />
  </View>
)

export default Menu
