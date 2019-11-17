import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import { searchBar, searchBtn } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  onSearchChange(e){
    console.log(e);
    dispatch(searchBar(e))
  },
  onSearchClick(){
    dispatch(searchBtn(1))
  }
}))

export default class Search extends Taro.Component {

  render () {
    return (
      <AtSearchBar
        actionName='搜索'
        value={this.props.counter.search}
        onChange={this.props.onSearchChange.bind(this)}
        onActionClick={this.props.onSearchClick.bind(this)}
      />
    )
  }


}
