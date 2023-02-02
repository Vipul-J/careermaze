import React from 'react';
import "../assets/styles/core.css";
import weBanner from '../assets/images/weBanner.png';

function carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={weBanner} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default carousel