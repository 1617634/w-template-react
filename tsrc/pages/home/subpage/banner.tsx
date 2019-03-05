import * as React from 'react'
import styles from '../index.less'
import { Carousel } from 'antd-mobile';
export default class Home extends  React.Component<any, {}>{

  constructor(props){
    super(props)
    this.state = {
      imgHeight: '2.5rem',
    }
    
    
  }
  componentDidMount(){
    // Toast.info('1212')
  }
  
  render(){
    let { bannerList=[] } = this.props;
    return (
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          style={{paddingTop:'.8rem'}}
        >
          {bannerList.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imgUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }

}

