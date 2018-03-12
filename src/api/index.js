import mockedFavorites from '../data/favoriteGifs';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

function getFavorites() {
  return mockedFavorites;
}

export const fetchTrending = async () => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

export const fetchFavorites = async () => {
  try {
    const data = await getFavorites();
    return data;
  } catch(e) {
    console.log(e);
  }
}