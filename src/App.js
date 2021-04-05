import './App.css';
import Main from './components/main/main'
import Habilidades from './components/habilidades/habilidades';
import Proyectos from './components/proyectos/proyectos';
import Formacion from './components/formacion/formacion';
import Footer from './components/footer/footer';

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