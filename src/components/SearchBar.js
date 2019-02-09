import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {

  state = {
    search: null,
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value})
  }

  handleSubmit = () => {
    this.props.search(this.state.search)
  }

  render() {
    return(
      <div className='search'>
        Search Here &nbsp;
        <Input onChange={this.handleChange}></Input>
        <Button onClick={this.handleSubmit}>Go</Button>
      </div>
    )
  }
}

export default SearchBar