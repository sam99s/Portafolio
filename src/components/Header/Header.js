import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss'
import sam99s from './sam99s.png'

export const Header = () => {
    return(
        <header className="container-fluid d-block d-sm-flex justify-content-around align-items-center">
            <div className="logo col-sm-2 col-md-2 col-lg-4">
                <Link to="/"><img src={sam99s} alt="Logo sam99s" /></Link>
            </div>
            <div className="col-sm-6 col-lg-4">
                <nav className="menu d-flex justify-content-around">
                    <Link to="/estudios">Estudios</Link>
                    <Link to="/experiencia">Experiencia</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}

