import React from "react";
import { Component } from "react";

class Texto extends Component {

    render(){
    return (
      <div className="App">
          <p>{this.props.historia}</p>
      </div>
    );
    }
  }
  
  export default Texto;
  