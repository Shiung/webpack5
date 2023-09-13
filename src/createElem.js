export function createElem(tag, innerText) {
  let elem = document.createElement(tag)
  elem.innerText = innerText
  document.body.append(elem)
}

import shared from './sharded'
console.log('shared', shared)


// tree shaking test unused code
export function deadCode () {
  return 'unused code msg'
}