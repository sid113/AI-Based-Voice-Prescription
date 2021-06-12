import React from 'react'

import '@fortawesome/fontawesome-free/css/all.min.css';
export default function ContactUs() {
    return (
        <div id="contactus">
            <h1>Contact Us !</h1>
            {/* <div id="socialicons">
           <i class=" si fab fa-linkedin fa-lg"></i>
           
            <i class="si fab fa-instagram fa-lg"></i>
            <i class="si fab fa-github fa-lg"></i>
            <i class="si fab fa-facebook fa-lg"></i>
            </div>
                     */}

            <div class="container pt-3">
                <div class="row justify-content-sm-center">
                    <div class=" col-md-6">






                        <form class="form-signin">
                            <input type="text" class="form-control mb-2" placeholder="Work Email Address" required autofocus spellCheck="false"/>
                            <input type="text" class="form-control mb-2" placeholder="What's this about?" required spellCheck="false"/>
                            <textarea class="form-control mb-2" placeholder="Go ahead! we are listening .." rows="5" spellCheck="false"></textarea>
                            <button class="btn btn-lg btn-primary btn-block mb-1" type="submit">Submit</button>

                        </form>



                    </div>
                </div>
            </div>



            <div class="wrap">

                <a class="hover-fx"><i class="fab fa-linkedin "></i></a>
                <a class="hover-fx"><i class="fab fa-instagram "></i></a>
                <a class="hover-fx"><i class="fa fab fa-github "></i></a>
                <a class="hover-fx"><i class="fa fab fa-facebook "></i></a>

            </div>
            <h3>Wanna Connect by mail</h3>
            <h4>Email : contact@gmail.com</h4>
            {/* <img  class="bottomimg" src={contactimg}/> */}
        </div>

    )
}
