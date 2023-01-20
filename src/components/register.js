import React from 'react'
import "../assets/styles/core.css"; 
import { Link } from 'react-router-dom';

function register() {
    return (
        <>

            <div class="jumbotron jumbotron-fluid blue-bg p-3" id="registration">
                <div class="container" id="#home">
                    <div class="text-center text-white mt-4 mb-4">
                        <h1 className='sec-heading fw-bold text-decoration-underline'>REGISTRATION</h1>
                        <h3 class="text-inverse">
                            Participants for above events should be in group of 6.
                        </h3>
                        <h3 className='fw-bold'>(Group should have participants from atleast 3 different classes)
                        </h3>
                        {/* <a href="#" class="btn btn-lg btn-danger" role="button">START.....</a> */}
                        <Link to="/registration" class="btn btn-lg btn-danger">Start Registration</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default register