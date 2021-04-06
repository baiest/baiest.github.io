import {Component} from 'react';
import './formacion.css'
import Tarjeta from '../tarjeta/tarjeta'

import univalle from '../iconos/univalle.png'
import camacho from '../iconos/camacho.jpg'
import platzi from '../iconos/platzi.png'
export default class Formacion extends Component{
    render(){
        return(
            <section id="formacion" className="container__formacion">
                <h2 className="formacion__titulo">Mi Formación Académica</h2>
                <div className="formacion__caja">  
                    <Tarjeta 
                    imagen={univalle} 
                    subTitle="Universidad del Valle - Tecnólogia en sistemas de informacion"
                    alt="Logo univale"
                    />
                    <Tarjeta 
                    imagen={camacho} 
                    subTitle="IETI Antonio José Camacho - Bachiller Técnico en electronica"
                    alt="Logo univale"
                    />
                    <p className="formacion__parrafo" >Acutualmente viendo cursos en</p>
                    <Tarjeta 
                    imagen={platzi} 
                    subTitle="Platzi"
                    alt="Logo platzi"
                    />
                </div>
            </section>
        );
    }
}
