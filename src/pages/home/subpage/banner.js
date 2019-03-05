import React, { Component } from 'react'
import { Toast } from 'cyd'

import styles from '../index.less'

export default class Home extends Component{

  constructor(props){
    super(props)

    
    
  }
  componentDidMount(){
    // Toast.info('1212')
  }
  
  render(){
    let { list=[] } = this.props;
    return (
      <div className={styles.banner}>
        {/* <Carousel>
          {
            list.map((v, i)=>{
              return <div><img src={v.imgUrl} /></div>
            })
          }
        </Carousel> */}
      </div>
    )
  }

}

