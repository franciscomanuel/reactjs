import React, { Component } from 'react';

//Properties Initializers
export default class EventosES7 extends Component {
    
    state = {
        contador: 0
    };

    //Arrow functions
    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    //Arrow functions
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(props) {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}