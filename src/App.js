import './App.css';
import Main from './components/main/main.jsx';
import Habilidades from './components/habilidades/habilidades.jsx';
import Proyectos from './components/proyectos/proyectos.jsx';
import Formacion from './components/formacion/formacion.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
  <div className='App'>
    <Main/>
    <Habilidades/>
    <Proyectos/>
    <Formacion/>
    <Footer/>
  </div>
  );
}

export default App;