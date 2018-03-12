const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTrending = async () => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}