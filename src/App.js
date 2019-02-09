import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'
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
  
  

  render() {
    return (
      <div className="App">
        <ArtCard>

        </ArtCard>
      </div>
    );
  }
}

export default App;
