import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestFavorites } from '../../actions/';
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

const mapStateToProps = state => ({ favorites: state.favorites.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestFavorites }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);