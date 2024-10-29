import React from 'react';
import './SectionClients.css';
import quoteIcon from '../../../Images/icons/iconquote.svg';
import rating4Stars from '../../../Images/icons/rating4stars.svg';
import rating5Stars from '../../../Images/icons/rating5stars.svg';
import clientWoman from '../../../Images/icons/clientwoman.svg';
import clientMale from '../../../Images/icons/clientmale.svg';

const SectionClients = () => {
    return (
        <section aria-label="clients love our app" id="section-clients">
            <div className="container">
                <h2 className="h1">Clients are Loving Our App</h2>
                
                <div className="card">
                    <div className="quote">
                        <img src={quoteIcon} alt="Quotes icon" />
                    </div>
                    <img src={rating4Stars} alt="rating four stars" />
                    <p>
                        Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus,
                        egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
                        sit amet.
                    </p>
                    <div className="client">
                        <div className="client-icon">
                            <img src={clientWoman} alt="picture of a female client" />
                        </div>
                        <h3>Fannie Summers</h3>
                        <p>Designer</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="quote">
                        <img src={quoteIcon} alt="Quotes icon" />
                    </div>
                    <img src={rating5Stars} alt="rating five stars" />
                    <p>
                        Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum
                        nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
                        nunc.
                    </p>
                    <div className="client">
                        <div className="client-icon">
                            <img src={clientMale} alt="picture of a male client" />
                        </div>
                        <h3>Albert Flores</h3>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionClients;

