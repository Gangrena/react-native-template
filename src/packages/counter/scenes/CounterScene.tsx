import React from 'react'
import { Scene } from 'react-native-router-flux'

import { NAME } from '../constants'
import Counter from '../containers'

export default <Scene key={NAME} component={Counter} title="Counter" back />
