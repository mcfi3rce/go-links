import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "../components/Form";
import {useSearchParams} from "react-router-dom";

const Home = () => {
  let { user, isAuthenticated, loginWithRedirect } = useAuth0();
  // const queryParams = new URLSearchParams(window.location.search);
  // let { url } = queryParams.get('url'); 
  const [searchParams] = useSearchParams();
  let url = searchParams.get('url');
  console.log(url);
  return (
    <div>
      <h1>Hello, shortlink world!</h1>
      {!isAuthenticated ? (
        <div>
          <p>In order to create links please login.</p>
          <button
            onClick={() =>
              loginWithRedirect({
                redirectUri: window.location.origin,
              })
            }
          >
            Log In
          </button>
        </div>
      ) : (
        <div>
          <Form userName={user.name} url={url}/>
        </div>
      )}
    </div>
  );
};

export default Home;
