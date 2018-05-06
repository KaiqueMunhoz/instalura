import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src="https://www.tm-town.com/assets/default_male600x600-79218392a28f78af249216e097aaf683.png" alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    alots
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">03/10/2016 20:13</time>
            </header>            
        );
    }
}