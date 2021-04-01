function Player() {
  return (
    <div className="player">
      <h2>Player</h2>
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control"></div>
    </div>
  );
}

export default Player;
