import React from 'react'
import { createStore } from 'redux'
import Userreducer from './Userreducer'

const Userstore = createStore(Userreducer)

export default Userstore