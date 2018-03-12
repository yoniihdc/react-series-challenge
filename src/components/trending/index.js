import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiTrending } from '../../actions/';
import GifList from '../gifs/';

class Trending extends Component {
  componentDidMount() {
    this.props.requestApiTrending();
  }

  render() {
    const { trending } = this.props;

    return trending
    ? <GifList gifs={trending} />
    : <h1> Loading ... </h1>;
  }
}

const mapStateToProps = state => ({ trending: state.trending.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiTrending }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Trending);