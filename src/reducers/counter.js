import { PAGE, HOME } from '../constants/counter'

const INITIAL_STATE = {
  page: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGE:
      return {
        ...state,
        page: action.page
      }
    case HOME:
      return {
        ...state,
      }
     default:
       return state
  }
}
