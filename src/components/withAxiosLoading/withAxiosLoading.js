import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

//Import Components
import Loading from '../Loading/Loading'

//Import Pages
import Error from '../../pages/Error/Error';

const withAxiosLoading = (WrappedComponent, baseUrl) => {

    return (props) => {

        //Props
        const { urlId } = props.match.params;

        //State
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [data, setData] = useState({});

        //Append urlID to baseUrl if available
        const url = urlId == null ? (baseUrl) : (baseUrl + urlId);

        //Return states
        function GetLoadedComponent() {
            if (error != null)
                return <Error errorInfo={error} />
            else if (loading)
                return <Loading />
            else
                return <WrappedComponent {...props} data={data} />
        }

        useEffect(() => {
            const loadingTimer = setTimeout(() => {
                clearTimeout(loadingTimer);
                axios.get(url).then((response) => {
                    setData(response.data);
                    setLoading(false);
                }).catch((error) => {
                    console.log(error.response);
                    setError(error.response);
                });
            }, 100);
        }, []);

        return (
            <div className="enhancedComponent">
                {GetLoadedComponent()}
            </div>
        );
    }
}

withAxiosLoading.propTypes = {
    urlId: PropTypes.string
}

export default withAxiosLoading;
