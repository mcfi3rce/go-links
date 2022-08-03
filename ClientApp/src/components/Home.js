import React, { Component } from 'react';

const submitData = async (event) => {
    event.preventDefault();
    
    console.log("SUBMIT!!!");
    const response = await fetch('go',{
        method: 'POST',
        body: {
            user_name: 'adam-mcpherson',
            source: 'lofi-girl',
            target: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
            date_added: (new Date()).toLocaleDateString(),
            date_modified: ""}
    });
    console.log(response.json());
    
}

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
          <form>
         Where do you want to redirect to?<input/> 
         What's your short link<input/>
         <button onClick={submitData}>Submit</button>
          </form>
      </div>
    );
  }
}


