import React, {Component, useState} from 'react';

const Delete = ({ value, refresh}) => {
  const state = {user_name: value.user_name, source: value.source};

  const deleteRow = async ({event}) => {

    const response = await fetch('golink', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_name: state.user_name,
            source: state.source
        })
    });
    refresh();
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
    this.state = { urls: [], loading: true, refresh: this.populateUrlData };
  }

  componentDidMount() {
    this.populateUrlData();
  }

  populateUrlData = async () => {
    const response = await fetch('golink');
    const data = await response.json();
    this.setState({ urls: data, loading: false });
  }

  renderUrlsTable(urls) {
     const sortByField = (field) => {this.setState({urls: urls.sort((a,b) => (a[field] > b[field]) ? 1: -1)})};
     
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th onClick={() => sortByField('source')}>Short Link</th>
            <th>Target URL</th>
            <th onClick={() => sortByField('user')}>User</th>
            <th onClick={() => sortByField('creation_date')}>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url =>
            <tr key={url.source} id={url.source}>
              <td>{url.source}</td>
              <td>{url.target}</td>
              <td>{url.user_name}</td>
              <td>{url.date_added}</td>
              <td><Delete value={url} refresh={this.populateUrlData}/></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.renderUrlsTable(this.state.urls);

    return (
      <div>
        <h1 id="tabelLabel" >Existing Shortlinks</h1>
          Search: <input></input>
        {contents}
      </div>
    );
  }

  
}
