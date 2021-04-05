import { Component } from "react";
import './proyectos.css';

import TarjetaProyecto from "./tarjetaProyecto"
import {data} from './proyectos.json'
export default class Proyectos extends Component{
    render(){
        return(
            <section id="proyectos" className="container__proyectos">
                {data.map(img => {
                        let src_imagen;
                        //Revisar si la imagen existe
                        try {
                            src_imagen = require(`../assets/${img.nombre_imagen}`).default;
                        } catch{
                            src_imagen = '';
                        }
                        return(
                        <TarjetaProyecto imagen={src_imagen}
                        subtitulo={img.subtitulo}
                        texto={img.texto}
                        />)

                    })} 
            </section>
        );
    }
}