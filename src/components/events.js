import React from 'react'
import { faAward, faFaceSurprise, faFlagCheckered, faPeopleGroup, faShuttleSpace, faSmileWink, faSquareWhatsapp, faSurprise, faTrophy } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import site from '../assets/images/site.png'
import build from '../assets/images/build.png'
import abide from '../assets/images/abide.png'
import aspire from '../assets/images/aspire.png'


function events() {
    return (
        <>
            <div className='container' id='events'>
                <div className="d-flex justify-content-center mt-4 mb-4" id="Teaser">
                    <h1 className="fw-bold sec-heading darkblue-txt">Events</h1>
                </div>
                <div className="row ">
                    <div className="col-sm mb-4">
                        <div className="card">
                            <img src={site} className="card-img-top" alt="..." height={250} />
                            <div className="card-body">
                                <h2 className="card-title text-center fw-bold darkblue-txt border border-2 rounded">Site It</h2>
                                <h5 className="card-text text-center">Style and Show off!
                                </h5>
                                <p className='fs-5'>Be the creative coder with cited approach...
                                </p>
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#siteModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm mb-4">
                        <div className="card">
                            <img src={build} className="card-img-top" alt="..." height={250} />
                            <div className="card-body">
                                <h2 className="card-title text-center fw-bold darkblue-txt border border-2 rounded">Build</h2>
                                <h5 className="card-text text-center">Scrutiny of Resume
                                </h5>
                                <p className='fs-5'>Build and design the bestest resume of all time...
                                </p>
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#buildModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm mb-4">
                        <div className="card">
                            <img src={abide} className="card-img-top" alt="..." height={250} />
                            <div className="card-body">
                                <h2 className="card-title text-center fw-bold darkblue-txt border border-2 rounded">Abide</h2>
                                <h5 className="card-text text-center">Attempt with attitude
                                </h5>
                                <p className='fs-5'>Be the big brain and show your logics...
                                </p>
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#abideModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm mb-4">
                        <div className="card">
                            <img src={aspire} className="card-img-top" alt="..." height={250} />
                            <div className="card-body">
                                <h2 className="card-title text-center fw-bold darkblue-txt border border-2 rounded">Aspire</h2><h5 className="card-text text-center">Win with your Words
                                </h5>
                                <p className='fs-5'>Be the one with creative words and convincing nature...
                                </p>
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#aspireModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="siteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="card-title text-center fw-bold darkblue-txt">Site It</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h2 className="text-center fw-bold darkblue-txt">Style and Show off!</h2>
                                <h5 className='text-align-left'>Be the creative coder with cited approach​</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Creativity, Content, Structure and Design</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h5 className='text-align-left fw-bold'>Don't worry, it's not a coding contest 😇</h5>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/9880937463'> Rahul A <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/8792860153'> Aishwarya H <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="buildModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="card-title text-center fw-bold darkblue-txt">Build</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h2 className="text-center fw-bold darkblue-txt">Scrutiny of Resume</h2>
                                <h5 className='text-align-left'>Build the best and attractive resume of all time.​​</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Quality, Flow of Content and Depth.</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Veeresh K <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/8867899280'> Muskan D <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="abideModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="card-title text-center fw-bold darkblue-txt">Abide</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h2 className="text-center fw-bold darkblue-txt">Attempt with Attitude</h2>
                                <h5 className='text-align-left'>Be the big brain and show your logics.</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Attitude is must 😎</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h5 className='text-align-left fw-bold'>Don't worry, there's no coding involved :-))</h5> 
                                    <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                    <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/6363910461'> Raju N <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                    <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/9606328977'> Pragnya S <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a> 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="aspireModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="card-title text-center fw-bold darkblue-txt">Aspire</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h2 className="text-center fw-bold darkblue-txt">Win with your Words</h2>
                                <h5 className='text-align-left'>Be Humble, Creative and Convincing</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Everything matters 😉 </h6>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7899272068'> Nikhil R <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            
                                <a className="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/9019064122'> Shreya D <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events