import React from 'react'
import {useState,useContext} from 'react'
import Axios from "axios"
import UserContext from "../../context/UserContext"
import { useHistory } from 'react-router-dom';
import ErrorNotice from '../../Misc/ErrorNotice';
import  { Redirect } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginimage from "../../assets/Images/login.svg"
export default function Login() {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const {userData,setUserData} = useContext(UserContext);
    const history=useHistory();
    const [error,setError]=useState();

   
    const [loading, setloading] = useState(false)
   
    const submit= async(e)=>{

        e.preventDefault();
        setloading(true);
        
        try {
            const loginUser={email,password}
            
            const loginRes=await Axios.post("http://localhost:5000/users/login/",loginUser);
            setUserData({
                token:loginRes.data.token,
                user:loginRes.data.user
            });
            localStorage.setItem("auth-token",loginRes.data.token);
            setTimeout(function(){
                setloading(false);
            },30000)
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
       


    }
    return (<div >

  <div class="container LoginPage">
        <div class="row py-4 mt-4 ">

            <div class="col-lg-6 col-md-5 pr-lg-5 mb-5 mb-md-0 ">
                <img src={loginimage} alt="login svg" class="img-fluid   d-none d-md-block" />

            </div>


            <div class="col-md-7 col-lg-6 ml-auto">
                <h1 class="mb-4">Login</h1>
                {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                <form onSubmit={submit}>
                
                    <div class="row">


                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="register-email" type="email" name="email" placeholder="Email Address*" class="form-control bg-white border-left-0 border-md" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>


                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="register-password" type="password" name="password" placeholder="Password*" class="form-control bg-white border-left-0 border-md" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>


                        <div class="form-group col-lg-12 mx-auto mb-0">
                            
                            <button type="submit" class=" btn btn-outline-primary" disabled={ loading } >
                            {loading && <i className="fa fa-refresh fa-spin"></i>}
                            Login
                            </button>

                        </div>
                        <div class="text-center w-100">
                        <p class="text-muted font-weight-bold">Not Yet Registered? <a href="/register" class="text-primary ml-2">Register</a></p>
                    </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
        </div>
    )
}
