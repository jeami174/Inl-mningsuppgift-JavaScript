import React from 'react';
import workMobile from '../../../Images/workmobile.svg';
import workTabletLeft from '../../../Images/worktabletleft.svg';
import workTabletCenter from '../../../Images/worktabletcenter.svg';
import workTabletRight from '../../../Images/worktabletright.svg';
import workDesktopLeft from '../../../Images/workdesktopleft.svg';
import workDesktopCenter from '../../../Images/workdesktopcenter.svg';
import workDesktopRight from '../../../Images/workdesktopright.svg';
import './HowDoesItWorkSection.css';

function HowDoesItWork() {
    return (
        <section aria-label="How does it work" className="section-how-does-it-work">
            <div className="container">
                    <h2 className="h1">How Does It Work?</h2>
                <div className="workmobile">
                    <div className="workimagesmobile">
                        <div className="slide-item">
                            <img className="mobile" src={workMobile} alt="A phone that shows how you can transfer money" />
                        </div>
                    </div>
                    <h3 className="h4">Transfers to people from your contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className="worktablet">
                    <div className="workimagestablet">
                        <div className="slide-item">
                            <img className="tabletleft" src={workTabletLeft} alt="A phone that shows how you can manage your money" />
                        </div>
                        <div className="slide-item">
                            <img className="tabletcenter" src={workTabletCenter} alt="A phone that shows how you can transfer money" />
                        </div>
                        <div className="slide-item">
                            <img className="tabletright" src={workTabletRight} alt="A phone that shows how you can transfer money" />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="h4">Step 3. Transfers to people from your contact list</h3>
                        <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </div>
                </div>
                <div className="workdesktop">
                    <div className="workimagesdesktop">
                        <div className="slide-item">
                            <img className="desktopleft" src={workDesktopLeft} alt="A phone that shows a budget in our app" />
                        </div>
                        <div className="slide-item">
                            <img className="desktopcenter" src={workDesktopCenter} alt="A phone that shows how you can manage your money" />
                        </div>
                        <div className="slide-item">
                            <img className="desktopright" src={workDesktopRight} alt="A phone that shows how you can transfer money" />
                        </div>
                    </div>
                    <div className="content">
                        <h3 className="h4">Latest transaction history</h3>
                        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowDoesItWork;
