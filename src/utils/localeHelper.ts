import { Platform, NativeModules } from 'react-native'
import { get } from 'lodash'

import i18n, { availableLocales } from '../i18n'
import { store } from '../app/store'

const getLocale = () => {
  const locale: { [key: string]: () => string } = {
    android: (): string => NativeModules.I18nManager.localeIdentifier || '',
    ios: (): string => NativeModules.SettingsManager.settings.AppleLocale || '',
  }
  return locale[Platform.OS]().substring(0, 2)
}

const getStoreLocale = (): string => get(store, 'intl.locale')

const getMessages = (locale?: string): any =>
  i18n[locale || getStoreLocale() || getLocale() || 'en']

export { getLocale, getMessages, availableLocales }
