import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';
const Url = "http://167.99.3.9:8085/user/login";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + JSON.stringify(this.state));
    const data = {
      "username": this.state.username,
      "password": this.state.password
    };
    const othePram = {
      //mode: 'cors',
      method: "POST", // *GET, POST, PUT, DELETE, etc.     
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };

    /*fetch("http://167.99.3.9:8085/posts/getAll",
      {
        method: "POST",
        body: data
      })
      .then(function (res) { return res.json(); })
      .then(function (data) { alert(JSON.stringify(data)) })*/
    fetch(Url, othePram)
      .then(data => { return data.json() })
      .then(data => {
        console.log(data);
        if(data.msg=="success")
        alert("Se ingreso correctamente");
        else
        alert("Usuario o contraseña incorrectos");

        //window.location.reload();
      })
      .catch(error => {
        alert("Error:" + JSON.stringify(error));
        console.log(error)
      })
     // window.location.reload();
    event.preventDefault();
  }
  render() {
    return (
      <div className=" container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="container form">


          Usuario:
          <input value={this.state.username} name="username" className="form-control w-100" onChange={this.handleInputChange} />
          Password:
          <input value={this.state.password} name="password" className="form-control w-100" onChange={this.handleInputChange} />
   

          <br></br>
          <input type="submit" class="btn btn-success form-control w-25" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
