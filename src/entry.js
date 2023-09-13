import msg from './info'
import { createElem } from './createElem'


console.log('from entry')
createElem('h1', msg)


import shared from './sharded'
console.log('shared', shared)

import mySideEffect from './mySideEffect'

import './asyncComp/creatBtn'