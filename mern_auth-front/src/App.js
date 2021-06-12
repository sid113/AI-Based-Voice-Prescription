import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom"
import Home from "./Components/pages/Home"
import Login from "./Components/auth/Login"
import Register from "./Components/auth/Register"
import ProtectedRoute from "./Components/auth/ProtectedRoute"
import Header from "./Components/layouts/Header"


import Axios from "axios"

import UserContext from "./context/UserContext"
import Profile from './Components/pages/Profile'


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
  



export default function App() {
    const [state, setState] = useState({isLoading: true, authenticated: false});
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    })
    // const [loading, setloading] = useState(false)
    
    useEffect(() => {
        // setloading(false)

        const checkLoggedIn = async () => {
            let token = await localStorage.getItem("auth-token");
           
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid", null, { headers: { "x-auth-token": token } });
            
            if (tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/", { headers: { "x-auth-token": token } });
              
                setUserData({ token, user: userRes.data });
                setState({isLoading: false, authenticated: token});
            }
        }
        checkLoggedIn();
    }, [])
  
    return (
        <div  >


            <BrowserRouter>




                <UserContext.Provider value={{ userData, setUserData }}>
                    <div>
                        <Header />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                           {/* <ProtectedRoute path="/profile" component={Profile}/> */}
                           <Route path="/profile" isAuthenticated={state.authenticated} component={Profile} />
                        

                        </Switch>
                    </div>

                </UserContext.Provider>

            </BrowserRouter>


        </div>

    )
}
