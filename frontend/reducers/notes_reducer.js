import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions.js';
import {NOTE_NAMES} from '../util/tones';




const notes = (state = [], action) => {
  let test = NOTE_NAMES;
  Object.freeze(state);
  switch(action.type){
    case KEY_PRESSED:
      if(NOTE_NAMES.includes(action.key) && !state.includes(action.key)){
        return [...state, action.key];
      }
      else{
        return state;
      }
    case KEY_RELEASED:
      if(state.includes(action.key) && NOTE_NAMES.includes(action.key))
      {
        let index = state.indexOf(action.key);
        return [...state.slice(0,index),
                ...state.slice(index+1)];
      }
      else{
        return state;
      }


    default:
      return state;
  }
};

export default notes ;
