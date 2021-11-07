import { ADD_PERSON } from '../constant'

const initState = [{ id: '01', name: 'Jin', age: 18 }]
export default function PersonReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
