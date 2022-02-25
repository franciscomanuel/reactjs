import React, { Component } from 'react';

//Properties Initializers
export default class MasSobreEventos extends Component {

    handleClick = (e, msg) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(msg);
    }

    render(props) {
        return(
            <div>
                <h2>Más sobre eventos</h2>

                {/* Pasando parámetros adicionales en una función */}
                <button onClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento")}>Saludar</button>

                {/* Eventos personalizados */}
                <Boton handleClick={(e) => this.handleClick(e, "Hola pasando parámetro desde un evento")} />
            </div>
        )
    }

}

/* Componente funcional */
/*function Boton(props) {
    return <button onClick={props.handleClick}>Botón hecho componente</button>
}*/

/* Variable expresada */
/*const Boton = (props) => (
    <button onClick={props.handleClick}>Botón hecho componente</button>
)*/

/* Usado para extraer la propiedad handleClick directamente */
const Boton = ({handleClick}) => (
    <button onClick={handleClick}>Botón hecho componente</button>
)