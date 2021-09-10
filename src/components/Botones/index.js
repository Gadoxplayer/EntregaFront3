import React from "react";
import { Component } from "react";


class Botones extends Component{

render(){
    return (
        <div className="opciones">
            <div className="opcion">
                <button id="A" className="botones" onClick={ this.props.handleclick}>A </button>
                <p>{this.props.opciona}</p>
            </div>
            <div className="opcion">
                <button id="B" className="botones" onClick={ this.props.handleclick}>B </button>
                <p>{this.props.opcionb}</p>
            </div>
        </div>
    );

}

}

export default Botones;