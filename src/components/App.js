import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './global/css/App.css';
import Header from './global/Header'
import Contenido from './global/Contenido';
import Comentarios from './global/Comentarios';

import Login from './global/Login';
import PostInfo from './global/PostInfo';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup'

import CreatePost from './global/CreatePost';

// modal para visualizar el post 
const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
)

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'default'
    };
  }
  
  // render app
  render() {
    const username =getCookie('username');

    return (
      <Router>
        <div>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/Contenido">Home</Link>
            <Link class="navbar-brand" to="/CrearPost">Crear Post</Link>

            <Link class="navbar-brand" to="/Login">Login</Link>


          </nav>
          <p class="floatdivder"><b>Usuario:[ {username}]</b></p>




          <Route exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/CrearPost" component={CreatePost} />
          <Route path="/Contenido" component={Contenido} />

        </div>
      </Router>
    );


  }





  /*
    render() {
      return (
        <div className="App">
          <button onClick={this.toggleModal}>
            Open the modal
          </button>
  estado: {this.state.isOpen}|
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            Here's some content for the modal
          </Modal>
          |
          <Header />
          <Contenido />
          <PostInfo />
        </div>
      );
    }*/



}

export default App;
