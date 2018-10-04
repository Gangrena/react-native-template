import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'
import {
  Scene,
  Stack,
  Overlay,
  Lightbox,
  Drawer,
  Modal,
} from 'react-native-router-flux'
import { Text } from 'react-native'

import { store, persistor } from '../../../app/store'

import counter from '../../counter'
import home from '../../home'
import posts from '../../posts/modules/list'
import addPosts from '../../posts/modules/form'
import settings from '../../settings/modules'
import AppDrawer from './Drawer'
import AppRouter from './AppRouter'
import Intl from '../../../app/features/intl'

class App extends Component {
  constructor(props: any) {
    super(props)
    addLocaleData([...en, ...pl])
    //persistor.purge() // clean persist store
  }

  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Intl.Provider textComponent={Text}>
            <AppRouter>
              <Overlay key="overlay">
                <Modal key="modal" hideNavBar>
                  <Lightbox key="lightbox">
                    <Drawer
                      key="drawer"
                      drawerWidth={200}
                      contentComponent={AppDrawer}
                    >
                      <Scene key="home" component={home} />
                      {settings.scenes}
                      {counter.scenes.CounterScene}
                      <Stack key="postsRoot">
                        {posts.scenes.PostListScene}
                        {addPosts.scenes.PostAddScene}
                      </Stack>
                    </Drawer>
                  </Lightbox>
                </Modal>
              </Overlay>
            </AppRouter>
          </Intl.Provider>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
