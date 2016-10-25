import React from 'react';
import $ from 'jquery';

import {NOTE_NAMES, TONES} from '../../util/tones';
import Note from '../../util/note';


class Synth extends React.Component{
  constructor(props){
    super(props);
    this.notes = [];
    this.noteNames = NOTE_NAMES;

    for (let i = 0; i < NOTE_NAMES.length; i++){
      this.notes.push( new Note(TONES[NOTE_NAMES[i]]));
    }
  }

  componentDidMount() {
  $(document).on('keydown', e => this.onKeyDown(e));
  $(document).on('keyup', e => this.onKeyUp(e));
  }


  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }



  playNotes() {
    let that = this;
    for (let i = 0; i < NOTE_NAMES.length; i++) {
      if (that.props.notes.includes(that.noteNames[i])) {
        that.notes[i].start();
      }else{
        that.notes[i].stop();
      }
    }
  }

  render() {
    let notesLi = this.notes.map((note, idx) => (
      <li key={idx}>{NOTE_NAMES[idx]}</li>
    ));
    return(
      <ul>
        {notesLi}
        {this.playNotes()}
      </ul>
    );
  }
}


export default Synth;
