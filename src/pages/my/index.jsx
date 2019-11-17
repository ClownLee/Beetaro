import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line import/first
import {View} from "@tarojs/components";
// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import { home } from '../../actions/counter'
import TNavBar from "../components/TNavBar";

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  homeData(){
    dispatch(home())
  }
}))
class My extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      return <View>
        <TNavBar />
        My Page
        </View>
  }
}

export default My
