import React, { Component } from 'react';

export default class EventosES6 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };

        // Para bindear el this al método sumar y restar y sea accesible dentro.
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e) {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(props) {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}