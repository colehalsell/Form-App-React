import React, { Component } from 'react';
import Form from './form.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userdata: {
        firstName: "",
        lastName: "",
        email:""
      }
    }
  }

  handleForm(userdata){
    console.log(userdata)
  }

  render() {
    return (
      <div>
        <h1> Please enter your information </h1>
        <Form userdata={this.state.userdata} handleForm={this.handleForm.bind(this)} />
        <h2>First Name: {this.state.firstName}</h2>
        <h2>Last Name: {this.state.firstName}</h2>
        <h2>Email: {this.state.firstName}</h2>
      </div>
    );
  }
}

export default App;
