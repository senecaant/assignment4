import React from 'react';
import styles from './Loading.module.css';
import loading from './loadAnim.gif';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={loading} alt="Loading..."/>
        </div>
    );
}

export default Loading;
