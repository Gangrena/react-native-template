import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { updateIntl } from '../../../../../app/features/intl/actions'
import { IntlState } from '../../../../../app/features/intl/types'
import { getMessages } from '../../../../../utils/localeHelper'

export interface IProps {
  availableLocales: any
  updateIntl: (opts: IntlState) => void
  locale: string
}

class Language extends Component<IProps> {
  public render() {
    const { availableLocales, locale } = this.props

    return (
      <FlatList
        data={availableLocales}
        keyExtractor={item => item}
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({ item }: { item: string }) => (
          <TouchableOpacity
            onPress={() =>
              this.props.updateIntl({
                locale: item,
                messages: getMessages(item),
              })
            }
          >
            <View>
              <Text style={{ color: item === locale ? 'red' : 'blue' }}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
}

const mapStateToProps = ({
  intl: { locale, availableLocales },
}: {
  intl: any
  locale: string
}) => ({
  locale,
  availableLocales,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateIntl }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language)
