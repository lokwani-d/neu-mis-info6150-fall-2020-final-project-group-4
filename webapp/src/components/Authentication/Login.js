import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel,
} from 'react-bootstrap';
import './Authentication.scss';

//import { loginUser } from '../../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errorMesage.err) {
        alert(newProps.errorMesage.err)
        this.props.removeError()
    }
    if (Object.keys(newProps.auth).length > 0 ) {
      this.props.history.push('/')
    }
  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
  }

  submitForm(e){
    e.preventDefault();
    //this.props.loginUser(this.state);
    //console.log(this.state);
    let loginUrl = '/login/';
    fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify( {
          "email": this.state.email,
          "password": this.state.password,
          "role": this.state.role
        }
      ),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then((responseJson) => {
      console.log(responseJson);
    });
  }

  render(){
    return(
      <Form horizontal={true} onSubmit={this.submitForm}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter email" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" value={this.state.value} placeholder="Enter password" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="role">
          <FormLabel>Role</FormLabel>
          <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
            <option>Student</option>
            <option>Teacher</option>
          </FormControl>
        </FormGroup>

        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
      </Form>

  )
  }
}

export default Login;
