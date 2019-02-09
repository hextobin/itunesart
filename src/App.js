import React, { Component } from 'react';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import 'semantic-ui-css/semantic.min.css'
import ArtCard from './components/ArtCard'

class App extends Component {

  state = {
    resp: null,
    anyData: false,
  }

  componentDidMount() {
    fetchJsonp('https://itunes.apple.com/search?term=jack+johnson&limit=25')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ resp: json, anyData: true})
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  artCard = () => {
    return this.state.resp.results.map((el, index) => {
      return <ArtCard key={index}></ArtCard>
    });
  }
  
  

  render() {
    return (
      <div className="App">
        {(this.state.anyData === true) ? 
          this.artCard() :
          <div>Loading</div>
        }
      </div>
    );
  }
}

export default App;
