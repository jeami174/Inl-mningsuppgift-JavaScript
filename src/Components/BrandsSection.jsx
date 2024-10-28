import React from 'react';
import brand1 from '../Images/brand1.svg';
import brand2 from '../Images/Brand2.svg';
import brand3 from '../Images/Brand3.svg';
import brand4 from '../Images/Brand4.svg';
import brand5 from '../Images/Brand5.svg';
import brand6 from '../Images/Brand6.svg';
import './BrandsSection.css';

const brandData = [
    { id: 'brand-1', src: brand1, alt: 'Logotype brand 1' },
    { id: 'brand-2', src: brand2, alt: 'Logotype brand 2' },
    { id: 'brand-3', src: brand3, alt: 'Logotype brand 3' },
    { id: 'brand-4', src: brand4, alt: 'Logotype brand 4' },
    { id: 'brand-5', src: brand5, alt: 'Logotype brand 5' },
    { id: 'brand-6', src: brand6, alt: 'Logotype brand 6' },
];

function BrandsSection() {
    return (
        <section aria-label="section-brands" id="section-brands">
            <div className="container">
                {brandData.map((brand) => (
                    <div key={brand.id} id={brand.id} className="brand-box">
                        <img src={brand.src} alt={brand.alt} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BrandsSection;
