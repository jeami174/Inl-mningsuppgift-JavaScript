import React from 'react'
import './MapSection.css';
import placeIcon from '../../../Images/icons/bx-map.svg';
import phoneIcon from '../../../Images/icons/bx-phone-call.svg';
import clockIcon from '../../../Images/icons/bx-time-five.svg';
import map from '../../../Images/map.svg';


const MapSection = () => {
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
                            <p><span className='strong'>Mon – Fri:</span> 9:00 am – 22:00 am <br/> <span className='strong'>Sat – Sun:</span> 9:00 am – 20:00 am</p>
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
                            <p><span className='strong'>Mon – Fri:</span> 9:00 am – 22:00 am <br/> <span className='strong'>Sat – Sun:</span> 9:00 am – 20:00 am</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MapSection