import React, { Component } from 'react';
import {useAuth0} from "@auth0/auth0-react";
import Form from "./Form";

const Home = () => {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    
    console.log("USER");
    console.log(user);
    return (
      <div>
        <h1>Hello, shortlink world!</h1>
          {!isAuthenticated ?
              <button onClick={loginWithRedirect}>Log In</button>
              :
              <Form userName={user.name}/>
          }
      </div>
    );
};

export default Home;
