import React from 'react';
import AddNewTrack from './Components/AddNewTrack';
import Search from './Components/Search';
import TrackList from './Components/TrackList';
import AudioProvider from './ContextApi/AudioContext';
import './Styles/App.css';
function App() {
  return (
    <div className="App">
        <AudioProvider>
          <Search />
          <TrackList/>
          <AddNewTrack/>
        </AudioProvider>
    </div>
  );
}

export default App;
