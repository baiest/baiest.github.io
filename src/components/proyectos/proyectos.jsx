import { Component } from "react";
import './proyectos.css';

import TarjetaProyecto from "./tarjetaProyecto"
import {data} from './proyectos.json'
export default class Proyectos extends Component{
    render(){
        return(
            <section id="proyectos" className="container__proyectos">
                <h4 className="proyectos__titulo">Álgunos de mis proyectos</h4> 
                <p className="proyectos__parrafo">
                    En mi <a href="https://github.com/baiest" 
                    target="_blank" rel="noreferrer">Github</a> encontrarás otros repositorios 
                    en los que subo proyectos para practicar, 
                    pruebo nuevas técnologias y lenguajes </p> 
                
                <div className="container__proyectos--scroll">
                    {data.map((img, key) => {
                        let src_imagen;
                            //Revisar si la imagen existe
                            try {
                                src_imagen = require(`../assets/${img.nombre_imagen}`).default;
                            } catch{
                                src_imagen = '';
                            }
                            return(
                                <TarjetaProyecto key={key} imagen={src_imagen}
                            subtitulo={img.subtitulo}
                            texto={img.texto}
                            />)
                            
                        })}
                </div>
            </section>
        );
    }
}