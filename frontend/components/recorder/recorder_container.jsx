import {connect} from 'react-redux';
import Recorder from './recorder.jsx';

import {startRecording, stopRecording} from '../../actions/tracks_action.js';

const mapStateToProps = state => ({
  isRecording: state.isRecording,
  tracks: state.tracks
});

const mapDispatchToProps = dispatch => ({
  startRecording: dispatch(startRecording()),
  stopRecording: dispatch(stopRecording())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
