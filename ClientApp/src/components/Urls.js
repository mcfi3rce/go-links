import React, { Component } from 'react';
import {Delete} from "./Delete";

export class Urls extends Component {
  static displayName = Urls.name;

  constructor(props) {
    super(props);
    this.state = { urls: [], loading: true };
  }

  componentDidMount() {
    this.populateUrlData();
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
              <td><Delete source={"tests"}/></td>
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

  async populateUrlData() {
    const response = await fetch('go');
    const data = await response.json();
    console.log(data);
    this.setState({ urls: data, loading: false });
  }
}
