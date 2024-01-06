import React, {useState} from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/SearchResults';
import styles from './App.module.css';


function App() {

  const [searchResults, setSearchResults] = useState([
    {
      name: "This Is Why",
      artist: "Paramore",
      album: "This Is Why"
    },
    {
      name: "Foundations of Decay",
      artist: "My Chemical Romance",
      album: "Foundations of Decay"
    },
  ])


  const [playlistName, setPlaylistName] = useState("The Best PlaylistEver")
  const [playlist, setPlaylist] = useState([
    {
      name: "This Is Why",
      artist: "Paramore",
      album: "This Is Why"
    },
    {
      name: "Foundations of Decay",
      artist: "My Chemical Romance",
      album: "Foundations of Decay"
    },
  ])



  return (
    <div>
      <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        <div className={styles.App}>
          <SearchBar />
          <div className={styles["App-playlist"]}>
          <SearchResults userSearchResults={searchResults} />
          {/* <Playlist /> */}
          </div>
      </div>
    </div>
  );
}

export default App;
