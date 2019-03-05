import React, { Component } from 'react'
import { connect } from 'dva';
import { Button } from 'cyd'

import styles from './index.less'
import Banner from './subpage/banner'
@connect(({ home, loading }) => ({
  home,
  loading: loading.effects['home/fetch'] || false,
}))
export default class Home extends Component{

  constructor(props){
    super(props)

    
    
  }
  componentDidMount(){

    this.fetchData()
  }
  fetchData = () => {
    this.props.dispatch({ type: 'home/fetch' });
  }

  render(){

    console.log(this.props.home.data);
    let { data } = this.props.home;
    let { banner=[], activity, product } = data;
    
    return (
      <>1
        <Banner list={banner}/>
        <Button onClick={this.click} ></Button>

      </>
    )
  }

}