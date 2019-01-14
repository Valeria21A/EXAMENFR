import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';

class Comentarios extends Component {
  constructor(props) {
    super(props);


    this.state = {
      data: [],
      id: ''
    };
  }

  componentDidMount() {
    console.log("entro a dismount");
    fetch("http://167.99.3.9:8085/comentario/getByPost/"+this.props.greeting)
      .then(res => res.json())
      .then(data => this.setState({ data: data }));


  }
  render() {
    const { data } = this.state;
    var dato = "asdas";
    console.log("id post enviado:" + this.props.greeting)

    console.log("data:");
    console.log(this.state);

    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5
        }}
      />
    );



    return (


      <div >
        <ColoredLine color="red" />

        <h1>Comentarios</h1>

        {data.map(hit =>
          <div>
            <hr></hr>


            <div key={hit._id} styles="{{width:40%; margin: 10px;}}">


              <div  >
                <div class="card">
                  <div class="card-body">
                    <span dangerouslySetInnerHTML={{ __html: hit.comentario }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}


      </div>
    );

  }
}

export default Comentarios;
