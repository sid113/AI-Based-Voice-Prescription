import React from 'react'
import { useState, useContext } from 'react'
import Axios from "axios"
import UserContext from "../../context/UserContext"
import { useHistory } from 'react-router-dom';
import ErrorNotice from '../../Misc/ErrorNotice';

import registersvg from "../../assets/Images/registerimage.svg"

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordcheck, setVerifyPassword] = useState();
    const [displayname, setDisplayName] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState();
    const [loading, setloading] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        setloading(true);
        try {

            const newUser = { email, password, passwordcheck, displayname }
            await Axios.post("http://localhost:5000/users/register/", newUser);
            const loginRes = await Axios.post("http://localhost:5000/users/login/", { email, password });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            setTimeout(function(){
                setloading(false);
            },40000)
            history.push("/");

        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }


    }
    return (
        <div class="container RegisterPage">
            <div class="row py-2 mt-2 align-items-center">

                <div class="col-lg-6 col-md-5 pr-lg-5 mb-5 mb-md-0">
                    <img src={registersvg} alt="" class="img-fluid   d-none d-md-block" />

                </div>


                <div class="col-md-7 col-lg-6 ml-auto">
                    <h1 class="mb-4">Register</h1>
                    {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                    <form onSubmit={submit}>

                        <div class="row">


                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-user text-muted"></i>
                                    </span>
                                </div>
                                <input id="register-display-name" type="text" name="firstname" placeholder="User Name" class="form-control bg-white border-left-0 border-md" onChange={(e) => setDisplayName(e.target.value)} />
                            </div>




                            <div class="input-group col-lg-12 mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-envelope text-muted"></i>
                                    </span>
                                </div>
                                <input id="register-email" type="email" name="email" placeholder="Email Address*" class="form-control bg-white border-left-0 border-md" onChange={(e) => setEmail(e.target.value)} />
                            </div>




                            {/* <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-black-tie text-muted"></i>
                            </span>
                        </div>
                        <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose your job</option>
                            <option value="">Designer</option>
                            <option value="">Developer</option>
                            <option value="">Manager</option>
                            <option value="">Accountant</option>
                        </select>
                    </div> */}


                            <div class="input-group col-lg-12 mb-1 ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-lock text-muted"></i>
                                    </span>
                                </div>
                                <input id="register-password" type="password" name="password" placeholder="Password*" class="form-control bg-white border-left-0 border-md" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" onChange={(e) => setPassword(e.target.value)} />

                            </div>
                            <div id="passwordHelpBlock" class="form-text mb-2">

                                <ul>
                                    <li>Your password must be 8 characters long</li>
                                    <li>Must contain upper and lowercase letters and numbers</li>
                                    <li>must not contain spaces,special characters, or emoji.</li>

                                </ul>
                            </div>


                            <div class="input-group col-lg-12 mb-1">
                                <div class="input-group-prepend">
                                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-lock text-muted"></i>
                                    </span>
                                </div>
                                <input id="register-confirm-password" type="password" name="passwordConfirmation" placeholder="Confirm Password*" class="form-control bg-white border-left-0 border-md" onChange={(e) => setVerifyPassword(e.target.value)} />
                            </div>
                            <div id="confirmpasswordHelpBlock " class="form-text mb-1">

                                <ul>
                                    <li>Confirm Password should match to Password Feild</li>
                           

                                </ul>
                            </div>

                            <div class="form-group col-lg-12 mx-auto mb-0">

                            <button type="submit" class=" btn btn-outline-primary" disabled={ loading } >
                            {loading && <i className="fa fa-refresh fa-spin"></i>}
                            Register
                            </button>
                            </div>
                            <div class="text-center w-100">
                                <p class="text-muted font-weight-bold">Already Registered? <a href="/login" class="text-primary ml-2">Login</a></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
