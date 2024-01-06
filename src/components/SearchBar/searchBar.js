import React, { useState } from 'react'; 
import styles from "./SearchBar.module.css";

function SearchBar() {
    return ( 
        <div className={styles.SearchBar}>
            <input 
                placeholder="Enter a Song, Album, Artist" 
            /> 
            <button className="SearchButton">Search</button>  
        </div>
    )
}

export default SearchBar