

import React from 'react'

function teaser() {
  return (
    <>
    <div class="container" id='teaser'>
        <div class="d-flex justify-content-center mt-4 mb-4">
            <h1 class="fw-bold sec-heading darkblue-txt">Teaser</h1>
        </div>
        <div class="ratio ratio-21x9 mb-4">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/57KN02mTkVA"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
    </>
  )
}

export default teaser;