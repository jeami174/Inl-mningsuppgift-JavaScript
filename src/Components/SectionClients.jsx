import React from 'react';
import './SectionClients.css';

const SectionClients = () => {
    return (
        <section aria-label="clients love our app" id="section-clients">
            <div className="container">
                <h2 className="h1">Clients are Loving Our App</h2>
                <div className="card">
                    <div className="quote">
                        <img src="Images/icons/iconquote.svg" alt="Quotes icon" />
                    </div>
                    <img src="Images/icons/rating4stars.svg" alt="rating four stars" />
                    <p>
                        Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus,
                        egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis
                        sit amet.
                    </p>
                    <div className="client">
                        <div className="client-icon">
                            <img src="Images/icons/clientwoman.svg" alt="picture of a female client" />
                        </div>
                        <h3>Fannie Summers</h3>
                        <p>Designer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="quote">
                        <img src="Images/icons/iconquote.svg" alt="Quotes icon" />
                    </div>
                    <img src="Images/icons/rating5stars.svg" alt="rating five stars" />
                    <p>
                        Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum
                        nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget
                        nunc.
                    </p>
                    <div className="client">
                        <div className="client-icon">
                            <img src="Images/icons/clientmale.svg" alt="picture of a male client" />
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
