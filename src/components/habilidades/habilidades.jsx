import {Component} from 'react';
import './habilidades.css';
import Tarjeta from '../tarjeta/tarjeta'
import {data} from './habilidades.json'

export default class Habilidades extends Component{
    render(){
        return(
            <section id="habilidades" className="container__habilidades">
                <h2 className="habilidades__titulo">Mis Habilidades</h2>
                <div className="habilidades__caja">  
                    {data.map((img, key) => {
                        let src_imagen;
                        //Revisar si la imagen existe
                        try {
                            src_imagen = require(`../iconos/${img.nombre_imagen}`).default
                        } catch{
                            src_imagen = ''
                        }
                        return(
                        <Tarjeta key={key} imagen={src_imagen} 
                        subTitle={img.subTitle} alt={img.alt} progress={img.progress}/>)

                    })} 
                </div>
            </section>
        );
    }
}