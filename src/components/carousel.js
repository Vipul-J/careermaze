import React from 'react';
import "../assets/styles/core.css";
import weBanner from '../assets/images/weBanner.png';

function carousel() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={weBanner} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default carousel