import React, {useState} from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/SearchResults';
import styles from './App.module.css';
import Spotify from '../../utils/Spotify'

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      name: "This Is Why",
      artist: "Paramore",
      album: "This Is Why",
      id: 1,
    },
    {
      name: "Foundations of Decay",
      artist: "My Chemical Romance",
      album: "Foundations of Decay",
      id: 2
    },
  ])


  const [playlistName, setPlaylistName] = useState("The Best Playlist Ever")
  const [playlistTracks, setPlaylistTracks] = useState([
    // {
    //   name: "This Is Why",
    //   artist: "Paramore",
    //   album: "This Is Why",
    //   id: 11,
    // },
    // {
    //   name: "Foundations of Decay",
    //   artist: "My Chemical Romance",
    //   album: "Foundations of Decay",
    //   id:22
    // },
  ])

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id)
    const newTrack = playlistTracks.concat(track)

    if (existingTrack) {
      alert("Track already exists")
    } else { 
      setPlaylistTracks(newTrack)
    }
  }

  function removeTrack(track) {
    const newPlaylist = playlistTracks.filter((t) => t.id !== track.id)
    setPlaylistTracks(newPlaylist)
  }

  function renamePlaylist(name) {
    setPlaylistName(name)
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      renamePlaylist("New Playlist")
      setPlaylistTracks([]);
    })
    
  }

  function search(term) {
    Spotify.getSearchResults(term).then((result) => setSearchResults(result));
    
  }


  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        <div className={styles.App}>
          <SearchBar onSearch={search} />
          <div className={styles["App-playlist"]}>
          <SearchResults 
            userSearchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={renamePlaylist}
            onSave={savePlaylist}
          />
          </div>
      </div>
    </div>
  );
}

export default App;
