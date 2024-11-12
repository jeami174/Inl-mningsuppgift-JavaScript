// MapSection.js
import React from 'react';
import './MapSection.css';
import placeIcon from '../../../Images/icons/bx-map.svg';
import phoneIcon from '../../../Images/icons/bx-phone-call.svg';
import clockIcon from '../../../Images/icons/bx-time-five.svg';
import map from '../../../Images/map.svg';
import Socialmedia from '../../../Components/Socialmedia';
import facebook from '../../../Images/icons/bxl-facebook-square.svg';
import twitter from '../../../Images/icons/bxl-twitter.svg';
import instagram from '../../../Images/icons/bxl-instagram-alt.svg';
import youtube from '../../../Images/icons/bxl-youtube.svg';

const MapSection = () => {
    const socialmedias = [
        {
            id: "facebook",
            icon: facebook,
            url: "https://www.facebook.com"
        },
        {
            id: "twitter",
            icon: twitter,
            url: "https://www.twitter.com"
        },
        {
            id: "instagram",
            icon: instagram,
            url: "https://www.instagram.com"
        },
        {
            id: "youtube",
            icon: youtube,
            url: "https://www.youtube.com"
        }
    ];

    return (
        <section aria-label="MapSection" className="MapSection">
            <div className='Container'>
                <div className="image">
                    <img
                        className="map"
                        src={map}
                        alt="A map to our medical center"
                    />
                </div>
                <div className="Adresses">
                    <div className="Center1">
                        <h2>Medical Center 1</h2>
                        <ul className="infolist">
                            <li>
                                <img src={placeIcon} alt="place icon" className="checkicon" />
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="phone icon" className="checkicon" />
                                <p>(406) 555-0120</p>
                            </li>
                            <li>
                                <img src={clockIcon} alt="clock icon" className="checkicon" />
                                <p><span className='strong'>Mon – Fri:</span> 9:00 am – 22:00 pm <br /> <span className='strong'>Sat – Sun:</span> 9:00 am – 20:00 pm</p>
                            </li>
                        </ul>
                    </div>
                    <div className="Center2">
                        <h2>Medical Center 2</h2>
                        <ul className="infolist">
                            <li>
                                <img src={placeIcon} alt="place icon" className="checkicon" />
                                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                            </li>
                            <li>
                                <img src={phoneIcon} alt="phone icon" className="checkicon" />
                                <p>(406) 544-0123</p>
                            </li>
                            <li>
                                <img src={clockIcon} alt="clock icon" className="checkicon" />
                                <p><span className='strong'>Mon – Fri:</span> 9:00 am – 22:00 pm <br /> <span className='strong'>Sat – Sun:</span> 9:00 am – 20:00 pm</p>
                            </li>
                        </ul>
                    </div>
                    <div className="container-socialmedias">
                        {socialmedias.map((socialmedia) => (
                             <Socialmedia
                             key={socialmedia.id}
                             icon={socialmedia.icon}
                             url={socialmedia.url}
                         />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MapSection;
