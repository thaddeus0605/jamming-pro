import React from "react"; 
import styles from "./Playlist.module.css"
import Tracklist from "../TrackList/TrackList";


function Playlist() {
    return (
        <div className={styles.Playlist}>
            <input defaultValue={"New Playlist"} /> 
            {/* <Tracklist /> */}
            <button className={styles["Playlist-save"]} >Save to Spotify</button>
        </div>
    )
}

export default Playlist;