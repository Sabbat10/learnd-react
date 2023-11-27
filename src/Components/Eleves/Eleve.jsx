import React, { Component } from "react";
import './eleve.css';

function Eleve(props) {
    return (
        <div className="eleve">
            <h1>{props.nom}</h1>
            <p>Moyenne scolaire : <b>{props.moyenne}/20</b></p>
            <p>Age : {Math.floor(Math.random() * 100)} ans</p>
            <i>{props.children}</i>
        </div>
    )
}
// La méthode avec les classes

// class Eleve extends Component {
//     render() {
//         return (
//             <div className="eleve">
//                 <h1>{this.props.nom}</h1>
//                 <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>
//             </div>
//         )
//     }
// }
export default Eleve;