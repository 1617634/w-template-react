import React, { Component } from 'react'


import { ajaxGet } from '@/common/ajax'



export default class Home extends Component{

  constructor(props){
    super(props)

    
    
  }
  componentDidMount(){
    this.fetchData()
  }
  // fetchData = async () => {
  //   let res = await ajaxGet('/api/home')
  //   console.log(res);
    

  // }

  render(){
    return (
      <div>Login</div>
    )
  }

}