import {Component} from 'react';
import './main.css';
import foto from'./logo512.png';

export default class Main extends Component {
    render() {
        return(
            <div className="container">
                <section className="main__container">
                    <img className="main__container--imagen" src={foto} alt="Foto de Juan"/>
                    <div className="main__container--social">
                        <div>
                            <a href="">A</a>
                            <a href="">B</a>
                        </div>
                        <div>
                            <a href="">C</a>
                            <a href="">D</a>
                        </div>
                    </div>
                </section>
                <h1 className="main__nombre">Juan Carlos</h1>
                <h2 className="main__apellido">Ballesteros Romero</h2>
                <p>Hola tengo 20 años</p>
                <p>Me gustan los videojuegos y programar</p>
                <a className="main__boton--mas" href="/">Más sobre mi <span>↓</span></a>
            </div>
        );
    }
}