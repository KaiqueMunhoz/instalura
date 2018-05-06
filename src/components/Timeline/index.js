import React, { Component } from 'react';
import Fotos from './../Fotos';

export default class Timeline extends Component {
    render(){
        return (
        <div className="fotos container">
          <Fotos/>
          <Fotos/>
        </div>            
        );
    }
}