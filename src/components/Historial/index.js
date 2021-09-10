import React from "react";
import { Component } from "react";

class Historial extends Component{
    render(){
        return(
            <div>
            <h4>Seleccion anterior: {this.props.selecAnterior}</h4>
            <h5>Historial de opciones elegidas: </h5>
                <ul>{this.props.hCompleto}</ul>
            </div>
        )
    }
}

export default Historial ;