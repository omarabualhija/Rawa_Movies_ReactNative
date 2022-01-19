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

const INIT_POPULAR_MOVIES = {popularMovies: [], Loading: true, error: ''};

export const POPULAR_MOVIES_REDUCER = (state = INIT_POPULAR_MOVIES, action) => {
  if (action.type === POPULAR_MOVIES_REQUEST) {
    return {...state, Loading: true};
  } else if (action.type === POPULAR_MOVIES_SUCCESS) {
    return {...state, popularMovies: action.payload, Loading: false};
  } else if (action.type === POPULAR_MOVIES_FAIL) {
    return {...state, error: action.payload, Loading: false};
  }

  return state;
};

const INIT_SLIDER_IMAGE = {sliderImg: [], Loading: true, error: ''};

export const GET_SLIDER_IMAGE_REDUCER = (state = INIT_SLIDER_IMAGE, action) => {
  if (action.type === IMAGE_SLIDER_REQUEST) {
    return {...state, Loading: true};
  } else if (action.type === IMAGE_SLIDER_SUCCESS) {
    return {...state, sliderImg: action.payload, Loading: false};
  } else if (action.type === IMAGE_SLIDER_FAIL) {
    return {...state, error: action.payload, Loading: false};
  }

  return state;
};

const INIT_GET_TRENDING = {TRENDING: [], loading: true};
export const GET_TRENDING_REDUCER = (state = INIT_GET_TRENDING, action) => {
  if (action.type === GET_TRENDING_REQUEST) {
    return {...state, Loading: true};
  } else if (action.type === GET_TRENDING_SUCCESS) {
    return {...state, TRENDING: action.payload, Loading: false};
  } else if (action.type === GET_TRENDING_FAIL) {
    return {...state, error: action.payload, Loading: false};
  }
  return state;
};

const INIT_GET_DISCOVER = {DISCOVER: [], loading: true};
export const GET_DISCOVER_REDUCER = (state = INIT_GET_DISCOVER, action) => {
  if (action.type === GET_DISCOVER_REQUEST) {
    return {...state, Loading: true};
  } else if (action.type === GET_DISCOVER_SUCCESS) {
    return {...state, DISCOVER: action.payload, Loading: false};
  } else if (action.type === GET_DISCOVER_FAIL) {
    return {...state, error: action.payload, Loading: false};
  }
  return state;
};
const INIT_GET_DETAILS = {DETAILS: {}, loading: true};
export const GET_DETAILS_REDUCER = (state = INIT_GET_DETAILS, action) => {
  if (action.type === GET_DETAILS_REQUEST) {
    return {...state, Loading: true};
  } else if (action.type === GET_DETAILS_SUCCESS) {
    return {...state, DETAILS: action.payload, loading: false};
  } else if (action.type === GET_DETAILS_FAIL) {
    return {...state, error: action.payload, Loading: false};
  }
  return state;
};
