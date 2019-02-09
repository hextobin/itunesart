import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class SearchBar extends Component {

  state = {
    search: null,
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.search)
  }

  render() {
    return(
      <div className='search'>
        <form onSubmit={this.handleSubmit}>
        <Input placeholder='Artist and Album Search'  onChange={this.handleChange}></Input>
        <Button className='Go' type='submit'>Go</Button>
        </form>
      </div>
    )
  }
}

export default SearchBar