import CounterReducer from './CounterReducer'
import { createStore } from 'redux'

const CounterStore = createStore(CounterReducer)

export default CounterStore