import axios from 'axios';

const API_KEY = '19999308-63355452380052cf6e6c55e30'; // Replace with your own API key

export async function fetchRandomImage(searchTerm) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&per_page=100`
  );
  const images = response.data.hits;

  if (images.length === 0) {
    throw new Error(`No images found for search term: ${searchTerm}`);
  }

  // Return a random image from the search results
  return images[Math.floor(Math.random() * images.length)];
}