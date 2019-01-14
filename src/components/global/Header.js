import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo}  alt="logo" height="30"  styles="float: left "/>
          <p>
            Blog
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </header>
    );
  }
}

export default Header;
