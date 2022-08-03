import React, { Component } from 'react';

class Form extends React.Component {
    state = { 
        userName: 'adam_mcpherson',
        source: '',
        target: ''};
    
    handleSubmit = async (event) => {
        event.preventDefault();

        console.log("SUBMIT!!!");
        const response = await fetch('go',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: this.state.userName,
                source: this.state.source,
                target: this.state.target})
        });
        console.log(response);

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Short Link
                <input
                    type="text"
                    value={this.state.source}
                    onChange={event => this.setState({ source : event.target.value })}
                    placeholder="youtube"
                    required
                />
                <br/>
                Redirect URL
                <input
                    type="text"
                    value={this.state.target}
                    onChange={event => this.setState({ target: event.target.value })}
                    placeholder="https://youtube.com"
                    required
                /> 
                <button>Create Link</button>
            </form>
        );
    }
}


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, shortlink world!</h1>
          <Form />
      </div>
    );
  }
}


