import {Component} from 'react';
import './tarjetaProyecto.css'

export default class TarjetaProyecto extends Component{
    render(){
        return(
            <div className= "container__tarjeta">
                <div className="tarjeta__imagen">
                    <div className="imagen"></div>
                    <small className="subtitulo"></small>
                </div>
                <p className="tarjeta__parrafo"></p>
            </div>
        );
    }
}