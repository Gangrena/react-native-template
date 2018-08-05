import asyncReducerFactory from '../../../../app/lib/asyncReducerFactory'
import { createState } from '../../../../app/lib/stateFactory'

export default asyncReducerFactory('post', 'SEND', createState([]))
