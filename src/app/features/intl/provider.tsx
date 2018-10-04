import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { IntlState } from './types'

const defaultSelector = (intl: IntlState) => ({
  key: intl.locale,
  ...intl,
})

const mapStateToProps = (
  { intl }: { intl: IntlState },
  { intlSelector = defaultSelector }
) => intlSelector(intl)

export default connect(mapStateToProps)(IntlProvider)
