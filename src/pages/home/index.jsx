import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line import/first
import {View} from "@tarojs/components";
// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import { home } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  homeData(){
    dispatch(home())
  }
}))
class Home extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      return <View>
        Home Page
      </View>
  }
}

export default Home
