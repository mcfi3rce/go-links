import {useAuth0} from "@auth0/auth0-react";
import Form from "../components/Form";
import {useParams} from "react-router-dom";

const CreateUrl = () => {
  const { url } = useParams();
  let {user, isAuthenticated, loginWithRedirect} = useAuth0();
     
  return (
    <div>
      <h1>You discovered a link that doesn't exist!</h1>
      <h2>Create your own destiny</h2>
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
    </div>);
}

export default CreateUrl;