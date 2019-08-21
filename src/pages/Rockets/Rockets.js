import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rockets.module.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import withAxiosLoading from '../../components/withAxiosLoading/withAxiosLoading';

function formatCostPerLaunch(costPerLaunch) {
    return ("$" + (costPerLaunch / 1000000) + " million");
}

const Rockets = (props) => {

    //Props
    const { data } = props;

    return (
        <div className={styles.rockets}>
            {data.map((data) => {
                return (
                    <section key={data.id}>
                        <Link to={`/rockets/${data.rocket_id}`}>
                            <Card>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.leftCard}>
                                        <img src={data.flickr_images[0]} alt="Rockets" />
                                    </div>
                                    <div className={styles.rightCard}>
                                        <h1>{data.rocket_name}</h1>
                                        <hr />
                                        <ul>
                                            <li>Cost per launch: {formatCostPerLaunch(data.cost_per_launch)}</li>
                                            <li>Success rate: {data.success_rate_pct}%</li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </section>
                )
            })}
        </div>
    );
}

Rockets.propTypes = {
    data: PropTypes.array
}

export default withAxiosLoading(Rockets, 'https://api.spacexdata.com/v3/rockets');