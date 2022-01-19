import {
  POPULAR_MOVIES_REQUEST,
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_SUCCESS,
  IMAGE_SLIDER_REQUEST,
  IMAGE_SLIDER_FAIL,
  IMAGE_SLIDER_SUCCESS,
  GET_TRENDING_REQUEST,
  GET_TRENDING_SUCCESS,
  GET_TRENDING_FAIL,
  GET_DISCOVER_REQUEST,
  GET_DISCOVER_SUCCESS,
  GET_DISCOVER_FAIL,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL,
} from '../constents/getMovieconstents';
import axios from 'axios';
const KEY_V3 = 'c727aa1b4a59e773dae114f40ed44be4';
const initURL = 'https://api.themoviedb.org/';

export const GET_POPULAR_MOVIES = (pageNum = 1) => {
  return async dispatch => {
    dispatch({type: POPULAR_MOVIES_REQUEST});

    try {
      const {
        data: {results},
      } = await axios.get(
        `${initURL}3/movie/popular?api_key=${KEY_V3}&page=${pageNum}`,
      );

      dispatch({type: POPULAR_MOVIES_SUCCESS, payload: results});
    } catch (err) {
      dispatch({type: POPULAR_MOVIES_FAIL, payload: err});
    }
  };
};

export const GET_IMAGE_SLIDER = () => {
  return async dispatch => {
    dispatch({type: IMAGE_SLIDER_REQUEST});

    try {
      const {
        data: {results},
      } = await axios.get(`${initURL}3/movie/top_rated?api_key=${KEY_V3}`);

      let poster_img = [];
      results.forEach(e =>
        poster_img.push(`https://image.tmdb.org/t/p/w500/${e.poster_path}`),
      );
      dispatch({type: IMAGE_SLIDER_SUCCESS, payload: poster_img});
    } catch (e) {
      dispatch({type: IMAGE_SLIDER_FAIL, payload: e});
    }
  };
};

export const GET_TRENDING_DATA = () => {
  return async dispatch => {
    dispatch({type: GET_TRENDING_REQUEST});
    try {
      const {
        data: {results},
      } = await axios.get(`${initURL}3/trending/all/day?api_key=${KEY_V3}`);

      dispatch({type: GET_TRENDING_SUCCESS, payload: results});
    } catch (error) {
      dispatch({type: GET_TRENDING_FAIL});
    }
  };
};

export const GET_DISCOVER_ACTION = () => {
  return async dispatch => {
    dispatch({type: GET_DISCOVER_REQUEST});
    try {
      const {
        data: {results},
      } = await axios.get(
        `${initURL}3/discover/movie?api_key=${KEY_V3}&sort_by=vote_average.asc`,
      );
      dispatch({type: GET_DISCOVER_SUCCESS, payload: results});
    } catch (error) {
      dispatch({type: GET_DISCOVER_FAIL});
    }
  };
};

export const GET_DETAILS_ACTION = id => {
  return async dispatch => {
    dispatch({type: GET_DETAILS_REQUEST});
    try {
      const {data} = await axios.get(
        `${initURL}3/movie/${id}?api_key=${KEY_V3}`,
      );
      dispatch({type: GET_DETAILS_SUCCESS, payload: data});
    } catch (error) {
      dispatch({type: GET_DETAILS_FAIL});
    }
  };
};
