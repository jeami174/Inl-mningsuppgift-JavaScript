import React from 'react';
import Button from './Button'; // Justerar importen av knappkomponenten
import './SectionInfo.css';

const SectionInfo = () => {
    return (
        <section aria-label="section-info" id="section-info">
            <div className="container">
                <div className="content1">
                    <h2>Make your money transfer simple and clear</h2>
                    <ul className="infolist">
                        <li>
                            <img src="/Images/icons/check-circle.svg" alt="check icon" className="checkicon" />
                            <p>Banking transactions are free for you</p>
                        </li>
                        <li>
                            <img src="/Images/icons/check-circle.svg" alt="check icon" className="checkicon" />
                            <p>No monthly cash commission</p>
                        </li>
                        <li>
                            <img src="/Images/icons/check-circle.svg" alt="check icon" className="checkicon" />
                            <p>Manage payments and transactions online</p>
                        </li>
                    </ul>
                    <Button aria-label="Learn more">
                        <span>Learn more</span>
                        <img src="/Images/icons/arrowright.svg" alt="Arrow right icon" className="arrowicon" />
                    </Button>
                </div>
                <div className="image1">
                    <img src="/Images/transfermoney.svg" alt="A example of how you can transfer money in our App" className="inforight" />
                </div>
                <div className="image2">
                    <img src="/Images/receive-payments.svg" alt="A example of how you can receive payments in our App" className="inforight" />
                </div>
                <div className="content2">
                    <h2>Receive payment from international bank details</h2>
                    <div className="info">
                        <div className="info-box">
                            <div className="infoicon">
                                <img src="/Images/credit-card-icon.svg" alt="credit card icon" />
                            </div>
                            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                        </div>
                        <div className="info-box">
                            <div className="infoicon">
                                <img src="/Images/wallet-icon.svg" alt="wallet icon" />
                            </div>
                            <p>A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                        </div>
                    </div>
                    <Button aria-label="Learn more">
                        <span>Learn more</span>
                        <img src="/Images/icons/arrowright.svg" alt="Arrow right icon" className="arrowicon" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SectionInfo;
