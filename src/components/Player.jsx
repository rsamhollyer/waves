import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player(props) {
  //Props
  const {
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    songs,
    setSongs,
    currentSong,
    setCurrentSong,
  } = props;

  //Functions
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((s) => {
      if (s === nextPrev) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });

    setSongs(newSongs);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => currentSong.id === song.id);
    const nextSong = songs[currentIndex + 1] || songs[0];
    const prevSong = songs[currentIndex - 1] || songs[songs.length - 1];

    if (direction === "skip-forward") {
      await setCurrentSong(nextSong);
      activeLibraryHandler(nextSong);
    } else {
      await setCurrentSong(prevSong);
      activeLibraryHandler(prevSong);
    }

    return isPlaying ? audioRef.current.play() : null;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //State

  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.current)}</p>

        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.current}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-back");
          }}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />

        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />

        <FontAwesomeIcon
          onClick={() => {
            skipTrackHandler("skip-forward");
          }}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
}

export default Player;
