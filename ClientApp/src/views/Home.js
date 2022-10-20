import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Form from "../components/Form";

const Home = () => {
  let { user, isAuthenticated, loginWithRedirect } = useAuth0();

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
          <Form userName={user.name} />
        </div>
      )}
    </div>
  );
};

export default Home;
