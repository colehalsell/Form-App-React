import React, { Component } from 'react';
  class Form extends Component {
    constructor(props){
      super(props)
      this.state = props.userdata
      console.log(this.state)
    }

    handleChange(event){
      const target = event.target
      const attribute = target.name
      console.log(attribute)
      this.setState({[attribute]: target.value})
    }

    submitForm(event){
      this.props.handleForm(event.target)
      event.preventDefault()
    }

    render() {
    return(
      <form onSubmit={this.submitForm.bind(this)} >
        <div className='form-group'>
          <label
            className='control-label'>
            First Name
          </label>
        <input
          name='firstName'
          type='text'
          value={this.state.firstName}
          onChange={this.handleChange.bind(this)}
          className='form-control'
        />
      </div>
      <div className='form-group'>
          <label
            className='control-label'>
            Last Name
          </label>
          <input
            name='lastName'
            type='text'
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>
      <div className='form-group'>
          <label
            className='control-label'>
            Email
          </label>
          <input
            name='email'
            type='text'
            value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className='form-control'
          />
        </div>

       <input
          type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form
