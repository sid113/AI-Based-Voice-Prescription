import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import a from "../../assets/Images/anonymous.png"
import siddhesh from "../../assets/Images/siddhesh.jpg"
import disha from "../../assets/Images/disha.jpeg"
import chavan from "../../assets/Images/du.jpeg"

import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Teampage() {
    return (

        <div id="teampage">
            <div class="container">
                <h3>Team</h3>

                <div class="card-deck row">

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={siddhesh} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Siddhesh Pawar</h4>

                                <p class="card-text">Comp, 42167</p>

                                <div class="social">
                                    <a href="https://www.linkedin.com/in/siddhesh-pawar-027853183/"><i class="linkedin fab fa-linkedin"></i></a>
                                    <a ><i class=" github fab fa-github-square "></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={disha} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Disha Doshi</h4>

                                <p class="card-text">Comp, 42166</p>

                                <div class="social">
                                    <a href="https://www.linkedin.com/in/siddhesh-pawar-027853183/"><i class=" linkedin fab fa-linkedin "></i></a>
                                    <a href="https://www.linkedin.com/in/siddhesh-pawar-027853183/" ><i class="github fab fa-github-square"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-12 col-lg-4">

                        <div class="card singleperson">


                            <div class="view overlay">
                                <img class="card-img-top" src={chavan} alt="Card image cap" />
                                <a href="#!">
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>


                            <div class="card-body persondetails">


                                <h4 class="card-title">Shreeya Chavan</h4>

                                <p class="card-text">Comp, 42165</p>

                                <div class="social">
                                    <a href="https://www.linkedin.com/in/"><i class=" linkedin fab fa-linkedin "></i></a>
                                    <a ><i class="github fab fa-github-square"></i></a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
