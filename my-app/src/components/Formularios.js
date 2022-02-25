import React, { useState } from 'react';

/*export default function Formularios() {

    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado");
        console.log(nombre);
        console.log(sabor);
        console.log(lenguaje);
        console.log(terminos);
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <p>Elige tu Sabor JS Favorito</p>
                <input 
                    type="radio"
                    id="vanila"
                    name="sabor"
                    value="vanila"
                    onChange={(e) => setSabor(e.target.value)}
                    defaultChecked
                />
                <label htmlFor="sabor">Vanila</label>
                <input 
                    type="radio"
                    id="React"
                    name="sabor"
                    value="React"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="sabor">React</label>
                <input 
                    type="radio"
                    id="Angular"
                    name="sabor"
                    value="Angular"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="sabor">Angular</label>
                <input 
                    type="radio"
                    id="Vue"
                    name="sabor"
                    value="Vue"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="sabor">Vue</label>
                <input 
                    type="radio"
                    id="Svelte"
                    name="sabor"
                    value="Svelte"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="sabor">Svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select 
                    name="lenguaje"
                    defaultValue=""
                    onChange={(e) => setLenguaje(e.target.value)}
                    >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input 
                    type="checkbox" 
                    id="terminos"
                    name="terminos"
                    onChange={(e) => setTerminos(e.target.checked)}
                />
                <br />
                <input 
                    type="submit"
                />
            </form>
        </>
    )
}*/

export default function Formularios() {

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado");
        console.log(form);
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={form.nombre ? form.nombre : ""}
                    onChange={handleChange}
                />
                <p>Elige tu Sabor JS Favorito</p>
                <input 
                    type="radio"
                    id="vanila"
                    name="sabor"
                    value="vanila"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="sabor">Vanila</label>
                <input 
                    type="radio"
                    id="React"
                    name="sabor"
                    value="React"
                    onChange={handleChange}
                />
                <label htmlFor="sabor">React</label>
                <input 
                    type="radio"
                    id="Angular"
                    name="sabor"
                    value="Angular"
                    onChange={handleChange}
                />
                <label htmlFor="sabor">Angular</label>
                <input 
                    type="radio"
                    id="Vue"
                    name="sabor"
                    value="Vue"
                    onChange={handleChange}
                />
                <label htmlFor="sabor">Vue</label>
                <input 
                    type="radio"
                    id="Svelte"
                    name="sabor"
                    value="Svelte"
                    onChange={handleChange}
                />
                <label htmlFor="sabor">Svelte</label>
                <p>Elige tu lenguaje de programación favorito</p>
                <select 
                    name="lenguaje"
                    defaultValue=""
                    onChange={handleChange}
                    >
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto términos y condiciones</label>
                <input 
                    type="checkbox" 
                    id="terminos"
                    name="terminos"
                    onChange={handleChecked}
                />
                <br />
                <input 
                    type="submit"
                />
            </form>
        </>
    )
}