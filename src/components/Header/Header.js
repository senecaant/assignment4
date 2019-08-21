import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {

    //State
    const [activeLink, setActiveLink] = useState(() => setInitialLink(props.location.pathname));

    function setInitialLink(link) {
        const isRocketPath = link.substring(0, 8);
        if (isRocketPath === '/rockets')
            return '/rockets';
        else if (link === '/')
            return '/history';
        else
            return link;
    }
    function GetLinkClass(link) {
        if (link === activeLink)
            return styles.activeLink;
        else
            return styles.inactiveLink;
    }

    function onClickLink(link) {
        setActiveLink(link);
    }

    return (
        <header className={styles.header}>
            <h1>SpaceX API</h1>
            <nav>
                <ul>
                    <li className={GetLinkClass('/history')}>
                        <Link to="/" onClick={() => onClickLink('/history')}>History</Link>
                    </li>
                    <li className={GetLinkClass('/rockets')}>
                        <Link to="/rockets" onClick={() => onClickLink('/rockets')}>Rockets</Link>
                    </li>
                    <li className={GetLinkClass('/about')}>
                        <Link to="/about" onClick={() => onClickLink('/about')}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default withRouter(Header);
