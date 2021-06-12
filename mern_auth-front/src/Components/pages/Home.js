import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import hero from "../../assets/Images/hero-img.svg";

import Footer from "../layouts/Footer";
import ContactUs from "../layouts/ContactUs";
import Teampage from "../layouts/Teampage"
import Features from '../layouts/Features'
import HowItWorks from '../layouts/HowItWorks'

import Prescribe from '../pages/Prescribe'
export default function Home() {
	const { userData } = useContext(UserContext);

	return (
		<div className="page">

			{ userData.user ? (
				<Prescribe />
				//{/* <Profile user={userData.user}/> */}
			) : ( userData.user ?  null:
				<div className="homecontainer">

					<div class="maincontainer  ">
						<div class="container">
							<div class="row ">
								<div class="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
									<div class="section-title">
										<h1 data-aos="fade-up" class="borderbottom aos-init aos-animate">Digital medical prescription  using AI </h1>
										<p data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">A Solution to write formatted prescription based on dictation
										from doctor. The app will provide facility to sign the prescription
and also send it to the patient directly on his phone or email id.</p>
									</div>

								</div>
								<div class="col-lg-7 order-1 order-lg-2 hero-img align-items-center aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
									<img src={hero} class="heroimg img-fluid animated" alt="hero" />
								</div>
							</div>
						</div>
					</div>
					<Features />
					<HowItWorks />
					<Teampage />
					<ContactUs />
					<Footer />
				</div>
			)}

		</div>

	);
}