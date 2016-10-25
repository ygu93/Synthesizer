import { createStore } from 'redux';
import reducer from '../reducers/root_reducer.js';



const preloadedState = {
  notes: [],
  isRecording: false,
  tracks: {}
};

const configureStore = (initialState = preloadedState) => {
  return createStore(reducer, initialState);
};

export default configureStore;
