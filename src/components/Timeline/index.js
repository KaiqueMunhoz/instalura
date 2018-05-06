import React, { Component } from 'react';
import Photos from './../Photos';

export default class Timeline extends Component {
    render(){
        return (
        <div className="fotos container">
          <Photos/>
          <Photos/>
        </div>            
        );
    }
}