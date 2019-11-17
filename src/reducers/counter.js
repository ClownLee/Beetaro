import { PAGE, HOME, SEARCH, SEARCH_BTN } from '../constants/counter'

const INITIAL_STATE = {
  page: 0,
  search: '',
  searchData: null
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
    case SEARCH:
      return {
        ...state,
        search: action.search
      }
    case SEARCH_BTN:
      return {
        ...state,
        searchData: action.searchData
      }
     default:
       return state
  }
}
