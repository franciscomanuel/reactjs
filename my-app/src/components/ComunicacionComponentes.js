import React, { Component } from 'react';

export default class Padre extends Component {
    
    state = {
        contador: 0
    };

    /* Para evitar usar el binding creamos la función mediante un arrow function */
    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    } 

    render(props) {
        return (
            <>
                <h2>Comunicación entre Componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} msg="Mensaje para el hijo número 1"/>
                <Hijo incrementarContador={this.incrementarContador} msg="Mensaje para el hijo número 2"/>
            </>
        )
    }
}

/* Comunicación entre hijo y padre (necesario que el método esté en el componente padre y la comunicación sea entre los props) */
function Hijo(props) {
    return(
        <>
            <h3>{props.msg}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    ) 
}