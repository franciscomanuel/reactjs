import React, { useRef } from 'react';

/* Las referencias las usamos cuando tengamos la necesidad de modificar el DOM */
export default function Referencias() {

    /* Manejador sin referencias (NO USAR) */
    /*const handleToggleMenu = (e) => {
        const $menu = document.getElementById("menu");

        if(e.target.textContent === "Menú") {
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        } else {
            e.target.textContent = "Menú";
            $menu.style.display = "none";
        }
    }*/

    let refMenuBtn = useRef(),
        refMenu = useRef();

    const handleToggleMenu = () => {

        if(refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }
    
    return(
        <>
            <h2>Referencias</h2>
            <button onClick={handleToggleMenu} ref={refMenuBtn}>Menú</button>
            <nav style={{display: "none"}} ref={refMenu}>
                <a href="#">Sección 1</a>
                <br />
                <a href="#">Sección 2</a>
                <br />
                <a href="#">Sección 3</a>
                <br />
                <a href="#">Sección 4</a>
                <br />
                <a href="#">Sección 5</a>
            </nav>
        </>
    )
}