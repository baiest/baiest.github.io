import {Component} from 'react';
import './tarjetaProyecto.css'
export default class TarjetaProyecto extends Component{
    render(){
        const imagen = this.props.imagen;
        const subtitulo = this.props.subtitulo;
        const texto = this.props.texto;
        return(
            <div className= "container__tarjeta">
                <div className="tarjeta__imagen">
                    <img src={imagen} alt="foto proyecto"/>
                    <h4>{subtitulo}</h4>
                </div>
                <p className="tarjeta__parrafo">{texto}</p>
            </div>
        );
    }
}