import React from 'react'
import abtImage from '../assets/images/abtImage.png';

function about() {
    return (
        <>
            <div class="container" id='about'>
                <div class="d-flex invi-txt-head justify-content-center mt-4 " id="about">
                    <h2 class="fw-bold sec-heading darkblue-txt">What is Career Maze?</h2>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div className='text-center'>
                            <img src={abtImage} className='img-fluid' />
                        </div>
                    </div>
                    <div class="col-lg-6">
                    <div className=' text-lg-left'>
                        <p className='para-large-txt'>
                            Career Maze Is an in-house event organized by <span className='text-danger fw-bold'> Talent Acquisition Cell </span>. Career Maze stands to encourage, motivate and prepare students for placement drives with their blooming skills and great minds.
                        </p>
                        <p className='para-large-txt'>
                            It provides a unique opportunity to know about their skills, experience the interview process, and learn about creation, and innovation within budding technocrats.
                            <br />
                            Career Maze is here to provide students with a life filled with exciting and energetic events and unforgettable memories win motive to prepare students to get placed without any fear with enlightened journey - <br /> "Class se Corporate tak!"
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about