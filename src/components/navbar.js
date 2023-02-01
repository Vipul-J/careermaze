import React from 'react'
import "../assets/styles/core.css";
import navLogo from '../assets/images/navLogo.png'

function navbar() {
    return (
        <>
           <nav className="navbar navbar-light shadow-sm p-2 bg-white rounded sticky-top border-bottom navbar-expand-md justify-content-center">
                <div className="container">
                    <a href="/" className="navbar-brand d-flex me-auto"> <img src={navLogo} alt='LOGO' height={70} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapsingNavbar">
                        <ul className="navbar-nav mx-auto-- ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="#teaser">TEASER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="#events">EVENTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="#committee">TALENT AQUISTION CELL</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link fw-bold darkblue-txt" href="#help">HELP</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-danger" href="#registration">REGISTRATION</a>
                            </li>
                        </ul>
                        {/* <form action="" className="d-flex">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search Here" />
                                <button type="submit" className="input-group-text rwt-primary-btn"> Search</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default navbar