import React from 'react';
import ReactD0M from 'react-dom';

import Note from './util/note';
import configureStore from './store/store.js';

import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  const root = document.getElementById('root');
  ReactD0M.render(< Root store={store} />, root);
  window.store = store;
});
