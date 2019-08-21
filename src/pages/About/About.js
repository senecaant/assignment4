import React from 'react';
import styles from './About.module.css';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import withAxiosLoading from '../../components/withAxiosLoading/withAxiosLoading';

function formatValuation(valuation) {
    return ("$" + (valuation / 1000000000) + " billion");
}

const About = (props) => {

    //Props
    const { data } = props;

    return (
        <div className={styles.about}>
            <Card>
                <h1>About {data.name}</h1>
                <hr />
                <p>{data.summary}</p>

                <ul>
                    <li>Founded: {data.founded}</li>
                    <li>CEO: {data.ceo}</li>
                    <li>COO: {data.coo}</li>
                    <li>Valuation: {formatValuation(data.valuation)}</li>
                </ul>
            </Card>
        </div>
    );
};

About.propTypes = {
    data: PropTypes.object
}

export default withAxiosLoading(About, 'https://api.spacexdata.com/v3/info');
