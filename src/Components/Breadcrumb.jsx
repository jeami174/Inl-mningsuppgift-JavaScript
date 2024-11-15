import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from '../Images/icons/bx-home-alt.svg';
import '../Styles/Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className="breadcrumb">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt="Home Icon" className="home-icon" /> Homepage
                        </Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;

                        return isLast ? (
                            <li key={name}>{name}</li>
                        ) : (
                            <li key={name}>
                                <Link to={routeTo}>{name}</Link>
                                <span className="separator">»</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumb;





