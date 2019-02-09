import React, { Component } from 'react';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import 'semantic-ui-css/semantic.min.css'
import ArtCard from './components/ArtCard'
import SearchBar from './components/SearchBar';


class App extends Component {

  state = {
    resp: null,
    anyData: false,
    searching: false,
    searchData: '',
  }

  componentDidMount() {
    fetchJsonp('https://itunes.apple.com/search?term=jack+johnson&entity=album&limit=25')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ resp: json, anyData: true})
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  componentDidUpdate() {
    if(this.state.searching === true) {
      fetchJsonp(`https://itunes.apple.com/search?term=${this.state.searchData}&entity=album&limit=25`)
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({ resp: json, searching: false})
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
    }
  }


  artCard = () => {
    return this.state.resp.results.map((el, index) => {
      const preImage = el['artworkUrl100']
      const image = preImage.substring(0, preImage.lastIndexOf("/") + 1) + "600x600.jpg";
      return <ArtCard image={image} key={index}></ArtCard>
    });
  }
  
  search = (str) => {
    this.setState({ searchData: encodeURIComponent(str), searching: true })
  } 

  render() {
    return (

      <div className="App">
        <SearchBar search={this.search} />
        {(this.state.anyData === true) ? 
          this.artCard() :
          <div>Loading</div>
        }
      </div>
    );
  }
}

export default App;
