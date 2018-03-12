import React from 'react';

const GifCard = ({ gif }) => {
  return (
    <div className="card">
      <img src={gif.images.original.url} alt={gif.id} />
      <div className="fav-button">
        <button>Add to ♥</button>
      </div>
    </div>
  );
};

export default GifCard;