import React from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
function skills() {
    return (
        <>
            <div className="d-flex blue-bg text-white">
                <div className=" container"> 
                            <h1 className='text-center mt-4 sec-heading'>Sponsored By : </h1>

                    <ul className="text-center">
                        <li className="list-inline-item m-4">
                            <img src={logo1} className='img-fluid'  />
                        </li> 
                        <li className="list-inline-item m-4">
                        <img src={logo2} className='img-fluid'  />
                        </li>
                        <li className="list-inline-item text-dark font-weight-bold m-4">
                        <h2>AJAY KALAL</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default skills;


