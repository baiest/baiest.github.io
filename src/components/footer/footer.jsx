import {Component} from 'react';
import './footer.css'

export default class Footer extends Component {
    render(){
        return(
            <section id="footer">
                <p><i>Email: juanballesteros2001@gmail.com</i></p>
                <p><i>Cali, Colombia</i></p>
                <p>Hecho por Juan con ♥ {new Date().getFullYear()}</p>
            </section>
        );
    }
}