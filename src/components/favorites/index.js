import React, { Component } from 'react';
import GifList from '../gifs/';

class Favorites extends Component {
  componentDidMount() {
    this.props.requestFavorites();
  }

  render() {
    const { favorites } = this.props;

    return favorites
    ? <GifList gifs={favorites} />
    : <h1> Loading ... </h1>
  }
}

export default Favorites;