import React from 'react'
import { Provider } from 'react-redux'
import {
  Scene,
  Stack,
  Overlay,
  Lightbox,
  Drawer,
} from 'react-native-router-flux'

import configureStore from '../../../app/store/configureStore'
import rootReducer from '../../rootReducer'
import { rootSaga } from '../../rootSaga'

import counter from '../../counter'
import home from '../../home'
import posts from '../../posts/modules/list'
import addPosts from '../../posts/modules/form'
import AppRouter from './AppRouter'
import AppDrawer from '../../app/containers/Drawer'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore(rootReducer, rootSaga)

const Layout = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter>
        <Overlay key="overlay">
          <Lightbox key="lightbox">
            <Drawer
              hideNavBar
              key="drawer"
              drawerWidth={200}
              contentComponent={AppDrawer}
            >
              <Stack key="root" hideNavBar>
                <Stack key="other">
                  <Scene key="home" component={home} hideNavBar={false} />
                  {counter.scenes.CounterScene}
                </Stack>
                <Stack key="postsRoot">
                  {posts.scenes.PostListScene}
                  {addPosts.scenes.PostAddScene}
                </Stack>
              </Stack>
            </Drawer>
          </Lightbox>
        </Overlay>
      </AppRouter>
    </PersistGate>
  </Provider>
)

export default Layout
