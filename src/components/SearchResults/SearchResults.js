import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/TrackList";


function SearchResults(props) {
    return ( 
        <div className={styles.SearchResults}>
            
            <Tracklist 
                userSearchResults={props.userSearchResults}
            />
        </div>
    );
}

export default SearchResults;