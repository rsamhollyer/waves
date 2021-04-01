import { useState, useRef } from "react";
import "./styles/app.scss";
import data from "./utils";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

function App() {
  //Ref
  const audioRef = useRef(0);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

  //Functions

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, current, duration });
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />

      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />

      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
