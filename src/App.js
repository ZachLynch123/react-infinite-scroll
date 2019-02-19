import React, { Component } from 'react';
import UnSplash, { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: []
    }
  }

  
  

  componentDidMount() {
    
    const unsplash = new UnSplash({
      applicationId: "76bb6285cf43bd300d2bf95da9dfa3658729c5770c211ba53756cc7e1493f594",
      secret: "7059170e8e0467f99b8a80951d30c21acba4bd8809317bcdabf05946aa4a93c7",
      callbackUrl: "http://localhost:3000/"
    });

    unsplash.photos.getRandomPhoto({count: 12})
    .then(toJson)
    .then(json => {
      console.log(json);
      
    })
  }



  render() {
    return (
      <div className="App">
        <InfiniteScroll
        dataLength={this.state.data.length}
        loader={<h4>loading..</h4>}
        >

        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
