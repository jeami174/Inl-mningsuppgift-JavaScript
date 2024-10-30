import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

//Jag har fått fin hjälp av ChatGTP att skapa en Breadbrumb-komponent.
//Dock modifierad av mig för att passa in i projektet :)

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav className="breadcrumb">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={name}>{name}</li>
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
