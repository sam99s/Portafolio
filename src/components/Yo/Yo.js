import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Yo.scss'
import foto1 from "./foto1.png"

export const Yo = () => {
    
    return(
        <section className="container-fluid text-center mt-5">
            <h1 className="mb-5">Samuel Schulz - Front End Developer</h1>
            <div className="d-flex sobreMi align-items-center">
                <p className="col-9">¡Bienvenid@! Este es mi portafolio, en el cual podrás ver la información mas relevante sobre mi, tanto a nivel personal como a nivel profesional. En el mismo podras navegar sobre distintas categorias para profundizar mas respecto del contenido. <br/> ¡Empecemos!🤓</p>
                <img src={foto1} className="col-3"/>
            </div>
        </section>
    )
}
