import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo1 from '../assets/images/logo1.png';
function skills() {
    return (
        <>
            <div class="d-flex blue-bg text-white">
                <div class=" container"> 
                            <h1 className='text-center mt-4 sec-heading'>Sponsored By : </h1>

                    <ul class="text-center">
                        <li class="list-inline-item m-4">
                            <img src={logo1} className='img-fluid'  />
                        </li> 
                        <li class="list-inline-item m-4">
                            <h1 className='sec-heading'>Ajay Kalal</h1>
                        </li> 
                        <li class="list-inline-item m-4">
                            <h1 className='sec-heading'>Be Prepared</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default skills;


