import Taro, { Component } from '@tarojs/taro'
import TNavBar from "../components/TNavBar";
// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import { home } from '../../actions/counter'


import './index.scss'
import Home from "../home";
import Cart from "../cart";
import {View} from "@tarojs/components";
import BTabBar from "../components/BTabBar";


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  homeData(){
    dispatch(home())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '冉冉童装'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
      const { page } = this.props.counter;
      return (page === 2)?<TNavBar />:
        <View>
          {(page === 0)?<Home />:<Cart />}
          <BTabBar />
        </View>
  }
}

export default Index
