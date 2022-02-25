import React, { Component } from 'react';

export default class AjaxApis extends Component {

    state = {
        pokemons: [],
    };

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon";
        fetch(url)
            .then(data => data.json())
            .then(json => {
                json.results.forEach(element => {
                    fetch(element.url)
                        .then(data => data.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            }
                            let pokemons = [...this.state.pokemons, pokemon];

                            this.setState({pokemons});
                        })
                });
            })
    }

    render() {
        return(
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {
                    this.state.pokemons.length === 0 
                        ? <h3>Cargando...</h3> 
                        : this.state.pokemons.map(el => (
                            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                        ))
                }
            </>
        )
    }
}

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}