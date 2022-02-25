import React, { Component } from 'react';
import data from './../helpers/data.json';
import ElementoLista from './ElementoLista';

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            estaciones: ["Primavera", "Varno", "Otoño", "Invierno"]
        }
    }
    render(props) {
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {this.state.estaciones.map((estacion, index) => (<li key={index}>{estacion}</li>))}
                </ol>
                <h3>Frameworks Frontend Javascript</h3>
                <ul>
                    {data.frameworks.map((el) => (<ElementoLista key={el.id} el={el} />))}
                </ul>
            </div>
        )    
    }
}