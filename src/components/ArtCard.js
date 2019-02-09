import { Card, Image } from 'semantic-ui-react'
import React, { Component } from 'react'

class ArtCard extends Component {
  render(){
    return(
      <div>
        <Card>
          <Card.Content>
            <img className='album-image' src={this.props.image} alt=""/>
            <Card.Header>{this.props.date}</Card.Header>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ArtCard