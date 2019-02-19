import React, { Component } from 'react';
import UnSplash, { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroll-component';
import Images from './components/images';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: []
    }
  }

  
  

  componentDidMount() {
    this.fetchRandomImages();
  }

  fetchRandomImages = () => {
    const unsplash = new UnSplash({
      applicationId: "76bb6285cf43bd300d2bf95da9dfa3658729c5770c211ba53756cc7e1493f594",
      secret: "7059170e8e0467f99b8a80951d30c21acba4bd8809317bcdabf05946aa4a93c7",
      callbackUrl: "http://localhost:3000/"
    });

    unsplash.photos.getRandomPhoto({count: 30})
    .then(toJson)
    .then(json => {
      // Temp array to store the current state
      let arr = this.state.data;

      // for loop to push each element of json array to temp array
      for (var i = 0; i < json.length; i++) {
        arr.push(json[i]);
      }
      // set state to the contents of temp array
      this.setState({
        data: arr
      });
    })
  }


  render() {
    const { data } = this.state;
    return (
      <div className="App">
      <h1 className="heading">Infinite Scroll UnSplash Code Challenge</h1>
      <p>Coded by <a href="http://zachlynch123.github.io">Zach Lynch</a></p>
      <div className="images">
        <InfiniteScroll
        dataLength={this.state.data.length}
        next={this.fetchRandomImages}
        hasMore={true}
        loader={<h4>loading..</h4>}
        >
        {data.map( image => 
          <Images key={image.id} img={image} />
        )}
        </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
