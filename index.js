import { AppRegistry } from 'react-native'
import app from './src/packages/app'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => app.components.Layout)
