import React from 'react';
import "../assets/styles/core.css";
import { faAward, faFaceSurprise, faFlagCheckered, faPeopleGroup, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function kpis() {
    return (
        <>
            <div className="text-center blue-bg p-5">
                <div className="row">
                    <div className="col-sm">
                        <span className="text-white"><FontAwesomeIcon icon={faFlagCheckered} size="5x" /></span>
                        <p className="h5 mt-2 mb-4 text-white">4 Events</p>
                    </div>
                    <div className="col-sm">
                        <span className="text-white"><FontAwesomeIcon icon={faPeopleGroup} size="5x" /></span>
                        <p className="h5 mt-2 mb-4 text-white">15+ Teams</p>
                    </div>
                    <div className="col-sm">
                        <span className="text-white"><FontAwesomeIcon icon={faAward} size="5x" /></span>
                        <p className="h5 mt-2 mb-4 text-white">5+ Winners</p>
                    </div>
                    <div className="col-sm">
                        <span className="text-white"><FontAwesomeIcon icon={faSmileWink} size="5x" /></span>
                        <p className="h5 mt-2 mb-4 text-white">Full of Surprises</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default kpis; 
