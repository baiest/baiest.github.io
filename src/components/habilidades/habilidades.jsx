import {Component} from 'react';
import './habilidades.css';

import js from './iconos/javascript.png'
import cmas from './iconos/c++.png'
import sql from './iconos/sql.png'
import python from './iconos/python.png'
import java from './iconos/java.png'

export default class Habilidades extends Component{
    render(){
        return(
            <section id="habilidades" className="container__habilidades">
                <h2 className="habilidades__titulo">Mis Habilidades</h2>
                <div className="habilidades__caja">   
                    <div className="imagen">
                        <img src={python} alt="Logo python"/>
                        <div className="habilidades__progress--container">
                            <div className="habilidades__progress" style={{ width: '50%'}}>50%</div>
                        </div>
                    </div>   
                    <div className="imagen">
                        <img src={java} alt="Logo python"/>
                        <div className="habilidades__progress--container">
                            <div className="habilidades__progress" style={{ width: '50%'}}>50%</div>
                        </div>
                    </div>   
                    <div className="imagen">
                        <img src={js} alt="Logo javascript"/>
                        <div className="habilidades__progress--container">
                            <div className="habilidades__progress" style={{ width: '50%'}}>50%</div>
                        </div>
                    </div>   
                    <div className="imagen">
                        <img src={cmas} alt="Logo c++"/>
                        <div className="habilidades__progress--container">
                            <div className="habilidades__progress" style={{ width: '50%'}}>50%</div>
                        </div>
                    </div>   
                    <div className="imagen">
                        <img src={sql} alt="Logo postgres"/>
                        <div className="habilidades__progress--container">
                            <div className="habilidades__progress" style={{ width: '50%'}}>50%</div>
                        </div>
                    </div>   
                </div>
            </section>
        );
    }
}