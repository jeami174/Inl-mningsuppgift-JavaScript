import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();

    // Dela upp väg till segment och ignorera den första tomma strängen
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="breadcrumb">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((name, index) => {
                    // Skapa fullständiga länkar för varje del i path
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={name}>{name}</li>  // Ingen länk för sista brödsmulan
                    ) : (
                        <li key={name}>
                            <Link to={routeTo}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
