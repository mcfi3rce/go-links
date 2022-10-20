import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import "./Urls.css";
import { useAuth0 } from "@auth0/auth0-react";

const UrlTable = ({ urls, populateUrlData }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [localUrls, setLocalUrls] = useState(urls);

  const sortByField = (field) => {
    setLocalUrls(urls.sort((a, b) => (a[field] > b[field] ? 1 : -1)));
  };
  // const filteredData = urls.filter((x) => {
  //   if (this.state.inputText === '') {
  //     return x;
  //   } else {
  //     return x.source.toLowerCase().includes(this.state.inputText) ||
  //       x.target.toLowerCase().includes(this.state.inputText);
  //   }
  // })
  console.log(user);
  console.log(urls);
  return (
    <table className="table table-striped" aria-labelledby="tabelLabel">
      <thead>
        <tr>
          <th onClick={() => sortByField("source")} className="clickable">
            Short Link
          </th>
          <th>Target URL</th>
          <th onClick={() => sortByField("user")} className="clickable">
            User
          </th>
          <th
            onClick={() => sortByField("creation_date")}
            className="clickable"
          >
            Creation Date
          </th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr key={url.source} id={url.source}>
            <td>{url.source}</td>
            <td>{url.target}</td>
            <td>{url.user_name}</td>
            <td>{url.date_added}</td>
            {user.name === url.user_name && (
              <td>
                <Delete value={url} refresh={populateUrlData} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Delete = ({ value, refresh }) => {
  const state = { user_name: value.user_name, source: value.source };

  const deleteRow = async ({ event }) => {
    const response = await fetch("golink", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: state.user_name,
        source: state.source,
      }),
    });
    refresh();
  };

  return <button onClick={deleteRow}>Delete</button>;
};

export class Urls extends Component {
  static displayName = Urls.name;

  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      loading: true,
      refresh: this.populateUrlData,
      inputText: "",
    };
  }

  componentDidMount() {
    this.populateUrlData();
  }

  populateUrlData = async () => {
    const response = await fetch("golink");
    const data = await response.json();
    this.setState({ urls: data, loading: false });
  };

  render() {
    let inputHandler = (e) => {
      //convert input text to lower case
      console.log(e.target.value);
      this.state.inputText = e.target.value.toLowerCase();
      this.renderUrlsTable(this.state.urls);
    };

    return (
      <div className="main">
        <h1 id="tabelLabel">Existing Shortlinks</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <UrlTable
          urls={this.state.urls}
          populateUrlData={this.populateUrlData}
        />
      </div>
    );
  }
}
