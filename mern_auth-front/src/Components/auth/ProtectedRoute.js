import UserContext from "../../context/UserContext";
import React, { useContext ,useEffect,useState } from "react";
import { Redirect, Route } from "react-router";


export default function ProtectedRoute({ component: Component, ...rest }) {
    const { userData } = useContext(UserContext);
   
    const checkLoggedIn = async () => {
        let token =  await localStorage.getItem("auth-token");
        console.log(`hahaha ${token}`)
     
        if(token !== null){
            console.log("hello")
            return <Component  /> 
            // console.log(`hahaha ${isLoggedIn}`)
        }
        else{
            console.log("nohello")
            return <Redirect to={{
                pathname: "/login"
            }

            }
            />
           
        }
       // console.log(`hahaha ${isLoggedIn}`)
     
    }
//     useEffect(()=>{
       
//         console.log(`hahaha ${isLoggedIn}`)
//          checkLoggedIn();
   
//  },[isLoggedIn])

    return (    
<>
</>
        // <Route {...rest}
        //     render={ async props => {
        //         await checkLoggedIn()?<Component {...props} /> : <Redirect to={{
        //                 pathname: "/login"
        //             }

        //             }
        //             />
                
               
        //     }} />


    )   
}
