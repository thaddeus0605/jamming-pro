import React from "react"; 
import styles from "./Playlist.module.css"
import Tracklist from "../TrackList/TrackList";


function Playlist(props) {
    return (
        <div className={styles.Playlist}>
            <input defaultValue={props.playlistName} /> 
            <Tracklist 
                userSearchResults={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            />
            <button className={styles["Playlist-save"]} >Save to Spotify</button>
        </div>
    )
}

export default Playlist;