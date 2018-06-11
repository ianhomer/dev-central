import { delay } from 'redux-saga'

export function* saga() {
  console.log('Saga execution')
  yield delay(1000)
}