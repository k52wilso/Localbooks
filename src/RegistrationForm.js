
import React, { Component } from 'react';


class RegistrationForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ');
      event.preventDefault();
    }
  
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-6">
            <label>Email</label>
            <input type="email" className="form-control" />
            <label>password</label>
            <input type="password" className="form-control" />
          </div>
        </form>
        
      );
    }
  }

export default RegistrationForm;