import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import './css/w3.css';

class PostInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {

    fetch("http://104.248.237.254:8082/posts/getById/5c3a645d82c6c300181b188f")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));


  }
  render() {
    const ColoredLine = ({ color }) => (
      <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5
        }}
      />
    );

    const { data } = this.state;

    return (


      <div >
        <button id="myBtn">Open Modal</button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>

        </div>

        {data.map(hit =>
          <div>
            <h1>
              Descripcion del Post
           </h1>
            <ColoredLine color="red" />

            <div key={hit._id} styles="{{width:40%; margin: 10px;}}">

              <h2>Titulo: {hit.titulo}</h2>

              <div  >
                <h2>Contenido:</h2>
                <div >
                  <span dangerouslySetInnerHTML={{ __html: hit.contenido }} />
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    );

  }
}

export default PostInfo;
