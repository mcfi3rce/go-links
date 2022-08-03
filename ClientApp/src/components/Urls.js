import React, { Component } from 'react';

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
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url =>
            <tr key={url.source}>
              <td>{url.user_id}</td>
              <td>{url.source}</td>
              <td>{url.target}</td>
              <td>{url.date_added}</td>
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
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateUrlData() {
    const response = await fetch('golink');
    const data = await response.json();
    console.log(data);
    this.setState({ urls: data, loading: false });
  }
}
