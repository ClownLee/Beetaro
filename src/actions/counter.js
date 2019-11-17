import {
  PAGE,
  SEARCH,
  SEARCH_BTN,
} from '../constants/counter'

export const page = (e) => {
  return {
    page: e,
    type: PAGE
  }
}

export const searchBar = (e) => {
  return {
    search: e,
    type: SEARCH
  }
}

export const searchBtn = (e) => {
  return {
    searchData: e,
    type: SEARCH_BTN
  }
}
