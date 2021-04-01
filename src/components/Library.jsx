import LibrarySong from "./LibrarySong";

function Library(props) {
  const {
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    libraryStatus,
  } = props;

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs[0]
          ? songs.map((s) => (
              <LibrarySong
                setCurrentSong={setCurrentSong}
                song={s}
                key={s.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                songs={songs}
                setSongs={setSongs}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Library;
