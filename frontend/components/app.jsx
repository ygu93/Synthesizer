import React from 'react';
import SynthContainer from './synth/synth_container.jsx';
import Recorder from './recorder/recorder_container.jsx';

const App = () => (
  <div className='app'>
    < SynthContainer />
    < Recorder />
  </div>
);

export default App;
