import React, { Component } from 'react'
// import Img from 'react-image'

// import Zmage from 'react-zmage'
import WxImageViewer from 'react-wx-images-viewer';

class App extends Component {

  state = {
    imags: [
      require('./2.jpg'),
      require('./3.jpg'),
    ],
    index: 0,
    isOpen: false
  };

  onClose = () =>{
    this.setState({
      isOpen: false
    })
  }

  openViewer (index){
    this.setState({
      index,
      isOpen: true
    })
  }

  render() {
    const {
      imags,
      index,
      isOpen
    } = this.state;

    return (
      <div className="app">
        <div className="img-list">
          {/*直接打开*/}
          <button onClick={this.openViewer.bind(this, 0)}>点击打开图片</button>
          {
            imags.map((item, index) => {
              return <div className="img" key={item}>
                <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%" height="auto" className=""/> 
              </div>
            })
          }
        </div>
        {
          isOpen ? <WxImageViewer onClose={this.onClose} urls={this.state.imags} index={index}/> : ""
        }
      </div>
    )
  }
}

export default App;