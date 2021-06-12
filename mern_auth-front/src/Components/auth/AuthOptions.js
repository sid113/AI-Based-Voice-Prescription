import React from 'react'

import UserContext from "../../context/UserContext"
import { useContext} from "react"
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'





export default function AuthOptions() {
    const history = useHistory();

    const { userData, setUserData } = useContext(UserContext);
    // const register = () => history.push("/register");
    // const login = () => history.push("login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");
    }

    const profile=()=>{
        history.push("/profile")
    }
    return (
        <>
            {
                userData.user ? (

                    <ul class="navbar-nav  mt-2 mt-lg-0 ml-auto">
                        <li class="nav-item active">
                            <button class="btn  btn-outline-secondary my-2 my-sm-0" style={{ marginRight: "25px" }} onClick={profile}>Profile</button>
                        </li>
                        <li class="nav-item active">
                            <button class="btn  btn-outline-secondary my-2 my-sm-0"style={{ marginRight: "25px" }}  onClick={logout}>Logout</button>
                        </li>
                    </ul>) : (<ul class="navbar-nav  mt-2 mt-lg-0 ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/login">Login</a>
                        </li>






                    </ul>)
            }

        </>
    )
}
