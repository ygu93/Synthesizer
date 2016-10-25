import {START_RECORDING, STOP_RECORDING, ADD_NOTES}
from '../actions/tracks_action';

import merge from 'lodash/merge';



const tracks= (state = {}, action) => {
  let currTrackId = 0;
  Object.freeze(state);
  let dupedState = merge({}, state);
  switch(action.type){
    case START_RECORDING:
      currTrackId+= 1;
      let newTrack = {
        id: currTrackId,
        name: `Track {currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      dupedState[currTrackId] = newTrack;
      return dupedState;
    case STOP_RECORDING:
      dupedState[currTrackId].roll.push(
        {notes: [], timeslice: action.timeNow - state[currTrackId].timeStart});
      return dupedState;
    case ADD_NOTES:
      let newNote = {notes: [action.keys],
        timeslice: action.timeNow - state[currTrackId].timeStart };
      dupedState[currTrackId].roll.push(newNote);
      return dupedState;
    default:
       return state;
  }

};


export default tracks;
