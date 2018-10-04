import React from 'react'
import { Stack } from 'react-native-router-flux'
import { Menu } from './menu'
import { Language } from './language'

export default {
  scenes: (
    <Stack key="settingsRoot">
      {Menu}
      {Language}
    </Stack>
  ),
}
