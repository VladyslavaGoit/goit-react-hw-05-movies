import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '85b6bf8190e8da1f4842f02e380f1b53';
const defaultParams = {
  api_key: API_KEY,
};

export const fetchTrendMovies = async () => {
  const response = await axios.get('/trending/movie/day', {
    params: defaultParams,
  });
  return response.data;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}`, { params: defaultParams });
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: defaultParams,
  });
  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: defaultParams,
  });
  return response.data;
};
