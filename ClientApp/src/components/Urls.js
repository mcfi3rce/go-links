import React, { Component } from 'react';

const Delete = ({ value}) => {
  const state = {user_name: value.user_name, source: value.source};

  const deleteRow = async ({event}) => {
    console.log("DLETEEE!!");
    console.log(state);

    const response = await fetch('go', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name: state.user_name,
            source: state.source
        })
    });
  }

  return (
      <button onClick={deleteRow} >
        Delete
      </button>);
}

export class Urls extends Component {
  static displayName = Urls.name;

  constructor(props) {
    super(props);
    this.state = { urls: [], loading: true, refresh: this.populateUrlData() };
  }

  componentDidMount() {
    this.populateUrlData();
  }

  populateUrlData = async () => {
    const response = await fetch('go');
    const data = await response.json();
    console.log(data);
    this.setState({ urls: data, loading: false });
  }

  static renderUrlsTable(urls) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>User</th>
            <th>Short Link</th>
            <th>Target URL</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url =>
            <tr key={url.source} id={url.source}>
              <td>{url.user_name}</td>
              <td>{url.source}</td>
              <td>{url.target}</td>
              <td>{url.date_added}</td>
              <td><Delete value={url}/></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Urls.renderUrlsTable(this.state.urls);

    return (
      <div>
        <h1 id="tabelLabel" >Existing Shortlinks</h1>
        {contents}
      </div>
    );
  }

  
}
