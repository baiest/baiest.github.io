import { Component } from "react";
import './proyectos.css';

import TarjetaProyecto from "./tarjetaProyecto"
import {data} from './proyectos.json'
export default class Proyectos extends Component{
    render(){
        return(
            <section id="proyectos" className="container__proyectos">
                <h4 className="proyectos__titulo">Algunos de mis proyectos</h4> 
                <p className="proyectos__parrafo">En mi <a href="https://github.com/baiest" target="_blank">Github</a> encontraras otros repositorios en los que subo proyectos para practicar,
                y en los que pruebo nuevas técnologias y lenguajes </p> 
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