import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import ComponenteFuncional from './components/ComponenteFuncional';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import EventosES6 from './components/EventosES6';
import EventosES7 from './components/EventosES7';
import MasSobreEventos from './components/MasSobreEventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/CustomHooks';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesConEstilos from './components/ComponentesConEstilos';

function App() {
  /*let nombre = "Francisco"
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];*/
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            {/*  <label htmlFor='nombre'>Nombre</label>
            <input type="text" id="nombre" />
            <h1>{nombre}</h1>
            <p>{auth ? "El usuario está logeado" : "El usuario no está logeado"}</p>
            <p>{2+1}</p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>{estaciones.map((el, index) => (<li key={index}>{el}</li>))}</ul> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            {/*<Componente msg="Soy un componente"/>
            <ComponenteFuncional msg="Soy un componente funcional."/>
            <hr />
            <Propiedades 
              cadena="Esto es una cadena de texto" 
              numero={5} 
              booleano={true} 
              array={[1, 2, 3]}
              objeto={{nombre:"Francisco", correo:"fmsanchezgr@gmail.com"}}
              funcion={(num) => num*num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={<ComponenteFuncional msg="Soy un componente pasado como props"/>}
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks titulo="Seguidores" />
            <hr />
          <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <CustomHooks />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <hr />
            <Estilos />*/}
            <hr/>
            <ComponentesConEstilos />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
