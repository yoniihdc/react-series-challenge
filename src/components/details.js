import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <div>
        Details: {this.props.match.params.gifId}
      </div>
    )
  }
}

export default Details;