import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { page } from '../../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  onPage(e) {
    dispatch(page(e))
  }
}))

class BTabBar extends Component {

  render(){
    return <AtTabBar
      fixed
      tabList={[
        { title: '主页', image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png', selectedImage: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png', text: 'new' },
        { title: '购物车', image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png' },
        { title: '我的', image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png', text: '100', max: 99 }
      ]}
      onClick={this.props.onPage}
      current={this.props.counter.page}
    />;
  }
}

export default BTabBar;
