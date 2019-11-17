import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line import/first
import {View} from "@tarojs/components";
import Search from "../search";
// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import { } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  onTest(){
    dispatch()
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
        <Search />
        <View>
          Home Page
        </View>
      </View>
  }
}

export default Home
