import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestApiTrending } from '../../actions/';
import trendingGifsData from '../../data/trendingGifs';

class Trending extends Component {
  componentDidMount() {
    // this.props.requestApiTrending();
  }

  addToFavorites(gifId, event) {
    event.preventDefault();
    console.log(gifId);
  }

  renderTrendingGifs(trendingGifs) {
    return trendingGifs.map((gif) => {
      return (
        <div className="card">
          <img src={gif.images.original.url} alt={gif.id} />
          <div className="fav-button">
            <button onClick={(e) => this.addToFavorites(gif.id, e)}>Add to ♥</button>
          </div>
        </div>
      )
    })
  }

  render() {
    const { trending } = this.props;

    // return this.renderTrendingGifs(trendingGifsData);
    return trendingGifsData
    ? this.renderTrendingGifs(trendingGifsData.data)
    : <h1> Loading ... </h1>;
  }
}

const mapStateToProps = state => ({ trending: state.trending.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiTrending }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Trending);