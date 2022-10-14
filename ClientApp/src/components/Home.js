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
    
    return (
      <div>
        <h1>Hello, shortlink world!</h1>
          {!isAuthenticated ?
              <button onClick={loginWithRedirect}>Log In</button>
              :
              <div>
                  <Form userName={user.name}/>
                  <button onClick={logout}> Log Out< /button>
              </div>
          }
      </div>
    );
};

export default Home;
