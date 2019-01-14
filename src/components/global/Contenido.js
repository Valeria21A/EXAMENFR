import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';
import Popup from 'reactjs-popup'
import Comentarios from './Comentarios';
import CrearComentario from './CrearComentario';


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clickMe(event, someParameter) {
  //do with event
  alert(someParameter);
}

class Contenido extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
      //postComentariosList: []
    };
  }

  componentDidMount() {
    var postComentariosList = [];

    fetch("http://167.99.3.9:8085/posts/getAll")

      .then(res => res.json())

      .then(data => {

        postComentariosList = data.map(function (postobj) {

          fetch("http://167.99.3.9:8085/comentario/getByPost/" + postobj._id)

            .then(res => res.json())

            .then(data => {

              // comentarios

              postobj.comentarios = data;

              return postobj;

            });

          return postobj;

        });



        console.log(postComentariosList);

        this.setState({ data: postComentariosList })



      }

      );



  }

  render() {
    const greeting = 'Welcome to React';

    var data = this.state.data;
    console.log("data render en:")
    console.log(data);

    console.log("data render metodo:")
    console.log(data.comentarios);
    console.log("imprimo los comentarios:");

    if (typeof data[0] != "undefined") {
      if (typeof data[0].comentarios === "undefined") {
        console.log("something is undefined");
      } else {

        console.log(data[0].comentarios);

      }
    }
    else {
      console.log("something is undefined");

    }
    return (


      <div >

        <h1>Lista de Post</h1>
        <hr></hr>
        {this.state.data.map(hit =>

          <div key={hit._id}>
            <Popup
              trigger={
                <div class=" containerMargin" key={hit._id} styles="{{width:40%; margin: 10px;}}">
                  <h2>{hit.titulo}</h2>

                  <div className="w3-card-4" >
                  
                    <img  width="100%" src={hit.imgUrl} onError={
                      () => this.src ='http://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png'
                    }></img>
                    
                    <div className="w3-container w3-center">
                      <p>{hit.titulo}</p>
                    </div>
                  </div>
                </div>

              }
              modal
              closeOnDocumentClick
            >
              <div className="scrollModal">
                <h2>Titulo: {hit.titulo}</h2>

                <div  >
                  <h2>Contenido:</h2>
                  <hr></hr>
                  <div >
                    <span dangerouslySetInnerHTML={{ __html: hit.contenido }} />
                  </div>
                </div>
                <div>
                  <Comentarios greeting={hit._id} />

                </div>
                <div>
                  <CrearComentario greeting={hit._id} />
                </div>
              </div>



            </Popup>
          </div>


        )}
      </div>
    );



  }
}

export default Contenido;
