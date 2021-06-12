import React from 'react'

import AuthOptions from "../auth/AuthOptions"

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {

    return (
        <nav class="nav  header  navbar navbar-expand-lg navbar-light nav-bg/">
            <a class="navbar-brand" href="/"><span style={{fontSize:'20px'}}>{"</"}prescription.</span><span >ai{">"}</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">

                <AuthOptions className="Authoption" />
            </div>
        </nav>
    )
}
