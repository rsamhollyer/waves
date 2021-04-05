function LibrarySong(props) {
  // Props
  const { song, setCurrentSong, audioRef, isPlaying, songs, setSongs } = props;
  //Functions

  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map((s) => {
      if (s === song) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });

    await setSongs(newSongs);
    return isPlaying ? audioRef.current.play() : null;
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? `selected` : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
