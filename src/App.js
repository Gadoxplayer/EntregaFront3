import React from "react";
import { Component } from "react";
import Botones from "./components/Botones";
import Texto from "./components/Texto";
import Historial from "./components/Historial";
import data from "./components/data.json"
import Swal from 'sweetalert2'
import { isCompositeComponentWithType } from "react-dom/test-utils";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        hitoria: "",
        contador: 0,
        hCompleto: [],
        selecAnterior: "",
    };
  this.handleclick = this.handleclick.bind(this);
  this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.hCompleto.push(this.state.selecAnterior);
    }
  }

  handleclick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      Swal.fire({
        title: 'Fin de la historia!!',
        text: 'To be continued...??     nope!!',
        imageUrl: 'http://pm1.narvii.com/6447/aca2c1093ea4f0f1cabef230251b68a43e797dd8_00.jpg',
        imageWidth: 200,
        imageHeight: 200,
      })
    } else if (id === "A" && this.state.selecAnterior !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        selecAnterior: "A",
        historia: this.state.contador + 1,
      });
    } else if (id === "A" && this.state.selecAnterior === "A") {
      this.setState({
        contador: this.state.contador + 2,
        historia: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.selecAnterior === "A") {
      this.setState({
        contador: this.state.contador + 3,
        historia: this.state.contador + 3,
        selecAnterior: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        selecAnterior: "B",
        historia: this.state.contador + 2,
      });
    }
  };

  render(){
  return (
    <div className="layout">

      <div className="historia">
        <Texto historia={data[this.state.contador].historia}/> 
      </div>

          <Botones 
          handleclick={this.handleclick}
          opciona={data[this.state.contador].opciones.a}
          opcionb={data[this.state.contador].opciones.b}
          />


      <div className="recordatorio"> 
        <Historial 
        selecAnterior={this.state.selecAnterior}
        hCompleto={this.state.hCompleto.map(
          (e, index) => (
            <li key={index}>{e}</li>
          ),
          data[this.state.contador].key
        )}
        />
      </div>

    </div>
  );
  }
}

export default App;