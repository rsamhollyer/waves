function Song(props) {
  const { currentSong } = props;

  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="Album Cover" />

      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
