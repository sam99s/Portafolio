import React from 'react';
import './Yo.scss'
import foto1 from "./foto1.png"
import { Estudios } from '../Estudios/Estudios';

export const Yo = () => {
    
    return(
        <div className="container-fluid">
            <section className="container-fluid text-center mt-5">
                <h1 className="mb-5 text-decoration-underline">Samuel Schulz - Front End Developer</h1>
                <div className="container text-center d-sm-flex sobreMi align-items-center justify-content-between">
                    <p className="col-sm-8 fs-4 text-center">¡Bienvenid@! Este es mi portafolio, en el cual podrás ver la información mas relevante sobre mi, tanto a nivel personal como a nivel profesional. En el mismo podras navegar sobre distintas categorias para profundizar mas respecto del contenido. <br/> ¡Empecemos!🤓</p>
                    <img src={foto1} className="col-12 col-sm-4" alt="Samuel Schulz"/>
                </div>
            </section>
            <Estudios />
        </div>
    )
}
