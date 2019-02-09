import { Card, Image } from 'semantic-ui-react'
import React, { Component } from 'react'

class ArtCard extends Component {
  render(){
    return(
      <div>
        <Card>
          <Card.Content>
            <Image src={this.props.image}/>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ArtCard