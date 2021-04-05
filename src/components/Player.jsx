import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import { playAudio } from "../util";

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
  //UseEffect
  useEffect(() => {
    //Add Active State
    const newSongs = songs.map((s) => {
      if (s === currentSong) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });

    setSongs(newSongs);
  }, [currentSong]);

  //Functions
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

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => currentSong.id === song.id);
    return (
      direction === "skip-forward"
        ? setCurrentSong(songs[currentIndex + 1] || songs[0])
        : setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]),
      playAudio(isPlaying, audioRef)
    );
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
