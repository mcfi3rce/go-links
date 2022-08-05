import React, { Component } from 'react';

export class Delete extends Component {

    state = {user_name: "adam-mcpherson"}
    constructor(props) {
        super(props);
        
    }

    deleteRow(event) {
        const userName = { ...this.state.course, title: event.target.value };
        console.log("DLETEEE!!");
        console.log(this.state.user_name);
        // const response = await fetch('go',{
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         user_name: "adam-mcpherson",
        //         source: "fda"})
        // });
    }
    
    render() {
        return (
            <button onClick={this.deleteRow}>
                Delete
            </button>);
    }
} 
