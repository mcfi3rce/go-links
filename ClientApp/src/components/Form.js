import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Form = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await getAccessTokenSilently();

    const response = await fetch("golink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_name: props.userName,
        source: source,
        target: target,
      }),
    });

    switch (response.status) {
      case 500:
        setShowMessage(true);
        setMessage("This link already exists");
        break;
      case 200:
        setShowMessage(true);
        setMessage("SUCCESS!!!");
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Short Link
      <input
        type="text"
        value={props.url ?? source}
        onChange={(event) => setSource(event.target.value)}
        placeholder="youtube"
        required
      />
      <br />
      Redirect URL
      <input
        type="text"
        value={target}
        onChange={(event) => setTarget(event.target.value)}
        placeholder="https://youtube.com"
        required
      />
      <button>Create Link</button>
      {showMessage ? <div style={{ color: "red" }}>{message}</div> : null}
    </form>
  );
};

export default Form;
