import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';
const Url = "http://167.99.3.9:8085/posts/create";
class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      titulo: '',
      contenido: '',
      imagen: ''
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
      "userid": "valeria",
      "titulo": this.state.titulo,
      "contenido": this.state.contenido,
      "imgUrl": this.state.imagen
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
        alert("Se ingreso correctamente");
        window.location.reload();
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
        <h2>Crear Post</h2>
        <form onSubmit={this.handleSubmit} className="container form">


          Titulo:
          <input value={this.state.titulo} name="titulo" className="form-control w-100" onChange={this.handleInputChange} />
          Imagen Url:
        <textarea value={this.state.imagen} name="imagen" className="form-control w-50" onChange={this.handleInputChange} />

          Contenido

        <textarea class="form-control rounded-0" value={this.state.contenido} name="contenido" rows="10" onChange={this.handleInputChange} />


          <br></br>
          <input type="submit" class="btn btn-success form-control w-25" value="Crear" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
