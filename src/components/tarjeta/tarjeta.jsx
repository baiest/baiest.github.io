import {Component} from 'react';
import './tarjeta.css';

export default class Tarjeta extends Component{
    render(){
        const imagen = this.props.imagen;
        const subTitle = this.props.subTitle;
        const alt = this.props.alt;
        const progress = this.props.progress;
       
        return(
            <div className="imagen">
                <img src={imagen} alt={alt}/>
                <small>{subTitle}</small>
                {progress ? 
                <div className="habilidades__progress--container">
                    <div className="habilidades__progress" style={{ width: `${progress}%`}}>{progress}%</div>
                </div> : ''}                
            </div>
        );
    }
}