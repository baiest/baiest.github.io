import {Component} from 'react';
import './footer.css'

export default class Footer extends Component {
    render(){
        return(
            <section id="footer">
                <p>Hecho por Juan con ♥ {new Date().getFullYear()}</p>
            </section>
        );
    }
}