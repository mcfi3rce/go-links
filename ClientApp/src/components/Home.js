import React, { Component } from 'react';

class Form extends React.Component {
    state = { 
        userName: 'adam-mcpherson',
        source: '',
        target: '',
        showMessage: false,
        message: ''};
    
    handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('golink',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: this.state.userName,
                source: this.state.source,
                target: this.state.target})
        });
        switch (response.status) {
            case 500:
                this.setState({showMessage: true, message: "This link already exists"});
                break;
            case 200:
                this.setState({showMessage: true, message: "Success!!"});
                break;
        }

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
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
                { this.state.showMessage ? <div style={{color: "red"}}>{this.state.message}</div> : null}
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


