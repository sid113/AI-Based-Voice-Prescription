import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/Images/1.svg';
import img2 from '../../assets/Images/2.svg';
import img3 from '../../assets/Images/3.svg';
import img4 from '../../assets/Images/4.svg';

export default function Features() {
    return (
        <section id="features" >
            <div class="container">
                <h3>Why presciption.ai?</h3>
                <div class="row">
                    <div class="col-lg-3 col-md-6 feature-box">
                        <img src={img4} alt="img1" />

                        <p>Prescription Generated using AI Technology.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 feature-box">
                        <img src={img1} alt="img2" />

                        <p>Patients medical history on the go.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 feature-box">
                        <img src={img2} alt="img3" />

                        <p>Copy of Digital Prescription with Patient.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 feature-box">
                        <img src={img3} alt="img4" />

                        <p>Verified Prescription.</p>
                    </div>
                </div>
            </div>

        </section>

    )
}
