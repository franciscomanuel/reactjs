import React, { useState, useEffect } from 'react';

export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([]);

    /* Dejando el array vacío, esta función solo se va a ejecutar una vez */
    /*useEffect(() => {
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

                            setPokemons((pokemons) => [...pokemons, pokemon]);

                        })
                });
            })
    }, []);*/

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();

            console.log(json);

            json.results.forEach(async (element) => {
                let res = await fetch(element.url),
                json = await res.json()

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }

                setPokemons((pokemons) => [...pokemons, pokemon]);

            });
        }

        getPokemons("https://pokeapi.co/api/v2/pokemon");

    }, []);

    return(
        <>
            <h2>Peticiones Asíncronas en Hooks</h2>
            {
                pokemons.length === 0 
                ? <h3>Cargando...</h3> 
                : pokemons.map(el => (
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                ))
            }
        </>
    )
}

function Pokemon({avatar, name}) {
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}