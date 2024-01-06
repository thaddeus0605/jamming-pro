import React from 'react';
import styles from "./Track.module.css";

function Track(props) {

    function renderAction() {
        if(props.isRemoval) {
            return (
                <button className={styles["Track-action"]}>
                    -
                </button>
            );
        } else {
            return (
                <button className={styles["Track-action"]}>
                    +
                </button>
            );
        }
    }

    return (
        <div className={styles.Track}>
            <div className={styles["Track-information"]}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
        {renderAction()}
        </div>
    )
}

export default Track;