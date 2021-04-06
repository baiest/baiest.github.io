import {Component} from 'react';
import './main.css';
import foto from'../assets/spider minimun.png';
import facebook from'../assets/facebook.png';
import twitter from'../assets/twitter.png';
import instagram from'../assets/instagram.png';
import github from'../assets/github.png';

function edad() {
    const birth = new Date();
    const year = 2000,
        month = 4,
        day = 22;
    let edad = birth.getFullYear() - year
    if (birth.getMonth() - (month - 1) >= 0) {
        if (birth.getDate() - day < 0 && birth.getMonth() - (month - 1) === 0) {
            edad = edad - 1;
        }
    } else {
        edad = edad - 1;
    }
    return edad;
}
export default class Main extends Component {
    render() {
        return(
            <section id="main" className="container">
                <section className="main__container--imagen">
                    <div className="main__imagen--borde"></div>
                    <img className="main__imagen" src={foto} alt="Foto de Juan"/>
                </section>
                <div className="main__container--social">
                    <a href="https://www.facebook.com/jbaiest/" target="_blank" rel="noreferrer"><img src={facebook} alt="Logo facebook"/></a>
                    <a href="https://www.instagram.com/jbaiest/" target="_blank" rel="noreferrer"><img src={instagram} alt="Logo facebook"/></a>
                    <a href="https://www.twitter.com/jBaiest" target="_blank" rel="noreferrer"><img src={twitter} alt="Logo facebook"/></a>
                    <a href="https://www.github.com/baiest" target="_blank" rel="noreferrer"><img src={github} alt="Logo facebook"/></a>
                </div>
                <h1 className="main__nombre">Juan Carlos</h1>
                <h2 className="main__apellido">Ballesteros Romero</h2>
                <h3>Hola, tengo {edad()} años ☺</h3>
                <p className="description">Me gustan los videojuegos, programar, y aprender</p>
                <a className="main__boton--mas" href="/">Más sobre mí<span>↓</span></a>
            </section>
        );
    }
}