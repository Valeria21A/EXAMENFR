import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';
//url servicio para crear un comentario
const Url = "http://167.99.3.9:8085/comentario/create";
class CrearComentario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      comentario: '',
      contenidoid: ''
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
    //alert de la data que se enviara al Ws
    alert('Data to send: ' + JSON.stringify(this.state));
    //CONSTRUIR JSON PAREL BODY DEL WS
    const data = {
      "userid": "valeria",
      "contenidoid": this.props.greeting,
      "comentario": this.state.comentario
    };
    //otros parametros del request
    const othePram = {
      //mode: 'cors',
      method: "POST", // *GET, POST, PUT, DELETE, etc.     
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };

    //llamar al ws
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
    console.log("id post enviado al crearario:" + this.props.greeting)
    return (
      <div className=" container">
        <h2>Crear Comentario</h2>
        <form onSubmit={this.handleSubmit} className="container form">

          
          Comentario:
          <textarea class="form-control rounded-0" value={this.state.comentario} name="comentario" rows="5" onChange={this.handleInputChange} />

          <input type="submit" class="btn btn-success form-control w-25" value="Crear" />
        </form>
      </div>
    );
  }
}

export default CrearComentario;
