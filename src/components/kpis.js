import React from 'react';
import "../assets/styles/core.css";
import { faAward, faFaceSurprise, faFlagCheckered, faPeopleGroup, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function kpis() {
    return (
        <>
            <div class="text-center blue-bg p-5">
                <div class="row">
                    <div class="col-sm">
                        <span class="text-white"><FontAwesomeIcon icon={faFlagCheckered} size="5x" /></span>
                        <p class="h5 mt-2 mb-4 text-white">4 Events</p>
                    </div>
                    <div class="col-sm">
                        <span class="text-white"><FontAwesomeIcon icon={faPeopleGroup} size="5x" /></span>
                        <p class="h5 mt-2 mb-4 text-white">15+ Teams</p>
                    </div>
                    <div class="col-sm">
                        <span class="text-white"><FontAwesomeIcon icon={faAward} size="5x" /></span>
                        <p class="h5 mt-2 mb-4 text-white">5+ Winners</p>
                    </div>
                    <div class="col-sm">
                        <span class="text-white"><FontAwesomeIcon icon={faSmileWink} size="5x" /></span>
                        <p class="h5 mt-2 mb-4 text-white">Full of Surprises</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default kpis; 
