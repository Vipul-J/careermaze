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
                <div class="d-flex justify-content-center mt-4 mb-4" id="Teaser">
                    <h1 class="fw-bold sec-heading darkblue-txt">Events</h1>
                </div>
                <div class="row ">
                    <div class="col-sm mb-4">
                        <div class="card">
                            <img src={site} class="card-img-top" alt="..." height={250} />
                            <div class="card-body">
                                <h2 class="card-title text-center fw-bold darkblue-txt border rounded">Site It</h2>
                                <h5 class="card-text text-center">Style and Show off!
                                </h5>
                                <p className='fs-5'>Be the creative coder with cited approach...
                                </p>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#siteModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm mb-4">
                        <div class="card">
                            <img src={build} class="card-img-top" alt="..." height={250} />
                            <div class="card-body">
                                <h2 class="card-title text-center fw-bold darkblue-txt  border rounded">Build</h2>
                                <h5 class="card-text text-center">Scrutiny of Resume
                                </h5>
                                <p className='fs-5'>Build and design the bestest resume of all time...
                                </p>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#buildModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm mb-4">
                        <div class="card">
                            <img src={abide} class="card-img-top" alt="..." height={250} />
                            <div class="card-body">
                                <h2 class="card-title text-center fw-bold darkblue-txt  border rounded">Abide</h2>
                                <h5 class="card-text text-center">Attempt with attitude
                                </h5>
                                <p className='fs-5'>Be the big brain and show your logics...
                                </p>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#abideModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm mb-4">
                        <div class="card">
                            <img src={aspire} class="card-img-top" alt="..." height={250} />
                            <div class="card-body">
                                <h2 class="card-title text-center fw-bold darkblue-txt border rounded">Aspire</h2><h5 class="card-text text-center">Win with your Words
                                </h5>
                                <p className='fs-5'>Be the one with creative words and convincing nature...
                                </p>
                                <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#aspireModal">
                                    Know more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="siteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="card-title text-center fw-bold darkblue-txt">Site It</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h2 class="text-center fw-bold darkblue-txt">Style and Show off!</h2>
                                <h5 className='text-align-left'>Be the creative coder with cited approach​</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Creativity, Content, Structure and Design</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h5 className='text-align-left fw-bold'>Don't worry, it's not a coding contest 😇</h5>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/9880937463'> Rahul A <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                <span class="darkblue-txt fw-bold"> and </span>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/8792860153'> Aishwarya H <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="buildModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="card-title text-center fw-bold darkblue-txt">Build</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h2 class="text-center fw-bold darkblue-txt">Scrutiny of Resume</h2>
                                <h5 className='text-align-left'>Build the best and attractive resume of all time.​​</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Quality, Flow of Content and Depth.</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Veeresh K <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                <span class="darkblue-txt fw-bold"> and </span>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Muskan D <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="abideModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="card-title text-center fw-bold darkblue-txt">Abide</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h2 class="text-center fw-bold darkblue-txt">Attempt with Attitude</h2>
                                <h5 className='text-align-left'>Be the big brain and show your logics.</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Attitude is must 😎</h6>
                                <h6 className='text-align-left'> -- Laptop and a mobile with data</h6>
                                <h5 className='text-align-left fw-bold'>Don't worry, there's no coding involved :-))</h5>
                                <div className='container'>
                                    <h6 className='text-align-left fw-bold'>Co-ordinators: </h6>
                                    <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> D G Abhay <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                    <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Harshita S <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="aspireModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 class="card-title text-center fw-bold darkblue-txt">Aspire</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h2 class="text-center fw-bold darkblue-txt">Win with your Words</h2>
                                <h5 className='text-align-left'>Be Humble, Creative and Convincing</h5>
                                <h5 className='text-align-left fw-bold'>PREREQUISITE : </h5>
                                <h6 className='text-align-left'> -- Everything matters 😉 </h6>
                                <h6 className='text-align-left fw-bold h5'>Co-ordinators: </h6>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Nikhil R <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                                <span class="darkblue-txt fw-bold"> and </span>
                                <a class="text-decoration-none darkblue-txt fw-bold" href='https://wa.me/7259620168'> Shreya D <FontAwesomeIcon icon={faSquareWhatsapp} size='xl' /></a>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary fw-bold" data-bs-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default events