import Taro, { Component } from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { page } from '../../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  onPage(e) {
    dispatch(page(e))
  }
}))

class TNavBar extends Component {
  render(){
    return <AtNavBar
      onClickLeftIcon={() => this.props.onPage(0)}
      color='#e93b3d'
      leftText='返回'
      leftIconType='chevron-left'
    />
  }
}

export default TNavBar;
