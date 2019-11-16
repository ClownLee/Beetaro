import {
  PAGE,
  HOME
} from '../constants/counter'

export const page = (e) => {
  return {
    page: e,
    type: PAGE
  }
}

export const home = () => {
  return {
    type: HOME
  }
}
