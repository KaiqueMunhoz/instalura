import React, { Component } from 'react';

//MicroComponents
import Header from './Header/index';
import Info from './Info/index';
import Updates from './Updates/index';

export default class Fotos extends Component {
    render(){
        return (
          <div className="foto">
            <Header/>
            <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2"/>
            <Info/>
            <Updates/>
          </div>            
        );
    }
}