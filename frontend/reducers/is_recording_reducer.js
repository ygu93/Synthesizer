import {START_RECORDING, STOP_RECORDING, ADD_NOTES}
from '../actions/tracks_action';



const isRecording= (state = false, action) => {
  Object.freeze(state);

  switch(action.type){
    case START_RECORDING:
      return true;
    case STOP_RECORDING:
      return false;
    default: return state;
  }

};



export default isRecording;
