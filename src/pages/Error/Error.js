import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';
import Card from '../../components/Card/Card';

const Error = (props) => {

    //Props
    const { errorInfo } = props;

    return (
        <div className={styles.error}>
            <Card>
                <h1>Status: {errorInfo.status}</h1>
                <p>{errorInfo.statusText}</p>
            </Card>
        </div>
    );
};

Error.propTypes = {
    errorInfo: PropTypes.object
}

export default Error;