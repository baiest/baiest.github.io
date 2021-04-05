import {Component} from 'react';
import './habilidades.css';
import Tarjeta from '../tarjeta/tarjeta'

import js from '../iconos/javascript.png'
import cmas from '../iconos/c++.png'
import sql from '../iconos/sql.png'
import python from '../iconos/python.png'
import java from '../iconos/java.png'

export default class Habilidades extends Component{
    render(){
        return(
            <section id="habilidades" className="container__habilidades">
                <h2 className="habilidades__titulo">Mis Habilidades</h2>
                <div className="habilidades__caja">   
                    <Tarjeta imagen={python} subTitle="Python" alt="Logo python" progress="70"/>
                    <Tarjeta imagen={java} subTitle="Java" alt="Logo java" progress="50"/>
                    <Tarjeta imagen={js} subTitle="JavaScript" alt="Logo javascript" progress="60"/>
                    <Tarjeta imagen={cmas} subTitle="C++" alt="Logo c++" progress="50"/>
                    <Tarjeta imagen={sql} subTitle="SQL" alt="Logo sql" progress="50"/>
                </div>
            </section>
        );
    }
}