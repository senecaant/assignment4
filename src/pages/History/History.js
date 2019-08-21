import React from 'react';
import styles from './History.module.css';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import withAxiosLoading from '../../components/withAxiosLoading/withAxiosLoading';

const History = (props) => {

    function formatDate(dateInUTC) {
        var localDate = new Date(dateInUTC);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return localDate.toLocaleDateString("en-US", options);
    }
    
    function getLink(dataLink) {
        if (dataLink.wikipedia)
            return dataLink.wikipedia;
        else if (dataLink.article)
            return dataLink.article;
        else
            return dataLink.reddit;
    }
    
    //Props
    const { data } = props;

    return (
        <div className={styles.history}>
            {data.reverse().map((data) => {
                return (
                    <section key={data.id}>
                        <a href={getLink(data.links)} target="_blank" rel="noopener noreferrer">
                            <Card>
                                <h1>{data.title}</h1>
                                <hr />
                                <h2>{formatDate(data.event_date_utc)}</h2>
                                <p>{data.details}</p>
                            </Card>
                        </a>
                    </section>
                )
            })}
        </div>
    );
}

History.propTypes = {
    data: PropTypes.array
}

export default withAxiosLoading(History, 'https://api.spacexdata.com/v3/history');

