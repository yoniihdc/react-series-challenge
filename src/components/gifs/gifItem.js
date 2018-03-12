import React, { Component } from 'react';

class GifCard extends Component {
  renderAddButton() {
    return (
      <div className="fav-button">
        <button>Add to ♥</button>
      </div>
    );
  }

  renderRemoveButton() {
    return (
      <div className="fav-button">
        <button>Remove from ♥</button>
      </div>
    );
  }

  render() {
    const { gif } = this.props;

    return (
      <div className="card">
        <img src={gif.images.original.url} alt={gif.id} />
        {gif.isFavorite ? this.renderRemoveButton() : this.renderAddButton()}
      </div>
    );
  }
}

export default GifCard;