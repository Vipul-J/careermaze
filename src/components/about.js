import React from 'react'
import abtImage from '../assets/images/abtImage.png';

function about() {
    return (
        <>
            <div className="container" id='about'>
            <div className="d-flex justify-content-center mt-4 mb-4">
            <h1 className="fw-bold sec-heading darkblue-txt">What is Career Maze?</h1>
        </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className='text-center'>
                            <img src={abtImage} className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className=' text-lg-left'>
                            <p className='para-large-txt'>
                                Career Maze is an in-house event organized by <span className='text-danger fw-bold'> Talent Acquisition Cell </span>. Career Maze stands to encourage, motivate and prepare students for placement drives with their blooming skills and great minds.
                            </p>
                            <p className='para-large-txt'>
                                It provides a unique opportunity to learn about their skills, experience the interview process, and know about creation and innovation within budding technocrats.
                                <br />
                                Career Maze is here to provide students with a life filled with exciting and energetic events and unforgettable memories with a motive to prepare students to get placed without any fear with an enlightened journey - <br /> <span className='fw-bold darkblue-txt'> "Class se Corporate tak!" </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about