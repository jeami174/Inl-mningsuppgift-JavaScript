import React from 'react';
import Button from '../../../Components/Button';
import InfoBox from '../../../Components/InfoBox'; 
import creditCardIcon from '../../../Images/credit-card-icon.svg';
import walletIcon from '../../../Images/wallet-icon.svg';
import checkCircleIcon from '../../../Images/icons/check-circle.svg';
import arrowRightIcon from '../../../Images/icons/arrowright.svg';
import transferMoneyImage from '../../../Images/transfermoney.svg';
import receivePaymentsImage from '../../../Images/receive-payments.svg';
import './SectionInfo.css';

const SectionInfo = () => {
    const infoItems = [
        "Banking transactions are free for you",
        "No monthly cash commission",
        "Manage payments and transactions online"
    ];

    return (
        <section aria-label="section-info" id="section-info">
            <div className="container">
                <div className="content1">
                    <h2>Make your money transfer simple and clear</h2>
                    <ul className="infolist">
                        {infoItems.map((item, index) => (
                            <li key={index}>
                                <img src={checkCircleIcon} alt="check icon" className="checkicon" />
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                    <Button aria-label="Learn more">
                        <span>Learn more</span>
                        <img src={arrowRightIcon} alt="Arrow right icon" className="arrowicon" />
                    </Button>
                </div>
                <div className="image1">
                    <img src={transferMoneyImage} alt="Example of transferring money in our app" className="inforight" />
                </div>
                <div className="image2">
                    <img src={receivePaymentsImage} alt="Example of receiving payments in our app" className="inforight" />
                </div>
                <div className="content2">
                    <h2>Receive payment from international bank details</h2>
                    <div className="info">
                        <InfoBox
                            icon={creditCardIcon}
                            title=""
                            description="Manage your payments online. Mollis congue egestas egestas fermentum fames."
                        />
                        <InfoBox
                            icon={walletIcon}
                            title=""
                            description="A elementum and imperdiet enim, pretium etiam facilisi aenean quam mauris."
                        />
                    </div>
                    <Button aria-label="Learn more">
                        <span>Learn more</span>
                        <img src={arrowRightIcon} alt="Arrow right icon" className="arrowicon" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SectionInfo;



