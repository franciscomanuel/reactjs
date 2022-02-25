import React, {useState, useEffect} from 'react';

export default function ScrollHooks(props) {

    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState("Francisco");


    useEffect(() => {
        console.log("Moviendo el Scroll");

        const detectarScroll = () => setScrollY(window.scrollY);

        window.addEventListener("scroll", detectarScroll);

        return () => window.removeEventListener("scroll", detectarScroll)
    }, [scrollY]);

    /* Con [] para la fase de montaje */
    useEffect(() => {
        console.log("Fase de Montaje");

    }, []);

    /* Con [scrollY] para la fase de actualización del estado scrollY */
    useEffect(() => {
        console.log("Fase de Actualización");

    }, [scrollY]);

    useEffect(() => {
        console.log("Fase de Actualización del name");

    }, [name]);

    /* Cuando a un useEffect le pones un return le estás diciendo de que es la fase de desmontaje */
    /*useEffect(() => {
        return () => {
            console.log("Fase de Desmontaje");
        }
    });*/

    return(
        <>
            <h2>Hooks - userEffect y el ciclo de vida</h2>
            <p>ScrollY del navegador {scrollY} px</p>
        </>
    )
}