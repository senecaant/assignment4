import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RocketInfo.module.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import withAxiosLoading from '../../components/withAxiosLoading/withAxiosLoading';

const RocketInfo = (props) => {

    //Props
    const { data } = props;

    //State
    const [pictureIndex, setPictureIndex] = useState(0);

    function ChangePicture(data) {
        if (pictureIndex + 1 === data.flickr_images.length)
            setPictureIndex(0);
        else
            setPictureIndex(pictureIndex + 1);
    }

    function formatStatus(isActive) {
        if (isActive) {
            return (
                <span className={styles.greenText}>Active</span>
            )
        } else {
            return (
                <span className={styles.redText}>Inactive</span>
            )
        }
    }
    return (
        <div className={styles.rocketInfo}>
            <Card>
                <h1>{data.rocket_name}</h1>
                <hr />
                <h2>Status: {formatStatus(data.active)}</h2>
                <p>{data.description}</p>
                <h3>Click for more photos</h3>
                <img src={data.flickr_images[pictureIndex]} alt="Rockets" onClick={() => ChangePicture(data)} />
                <Link to={`/rockets`}>Go back</Link>
            </Card>
        </div>
    );
}

RocketInfo.propTypes = {
    data: PropTypes.object
}

export default withAxiosLoading(RocketInfo, "https://api.spacexdata.com/v3/rockets/");