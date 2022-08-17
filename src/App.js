import "./App.css";
import UncontrolledExample from "./componentes/carrusel/Carrusel";
import Header from "./componentes/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./componentes/main/Main";
import Footer from "./componentes/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <UncontrolledExample/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
