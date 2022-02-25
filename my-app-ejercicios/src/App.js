import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";
// import CrudApp from "./components/CrudApp";

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      {/* <CrudApp /> */}
      {/* <hr /> */}
    </>
  );
}

export default App;
