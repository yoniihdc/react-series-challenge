import React from 'react';
import GifCard from './gifItem';

const GifList = ({ gifs }) => {
  console.log(gifs);
  
  return gifs.map((gif) => {
    return (<GifCard gif={gif}/>);
  });
};

export default GifList;
