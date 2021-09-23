import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss'
import sam99s from './sam99s.png'

export const Header = () => {
    return(
        <header className="container-fluid d-flex justify-content-around align-items-center">
            <div className="logo col-4">
                <Link to="/"><img src={sam99s} alt="Logo sam99s" /></Link>
            </div>
            <div className="col-4">
                <nav className="menu d-flex justify-content-around">
                    <Link to="/estudios">Estudios</Link>
                    <Link to="/experiencia">Experiencia</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}

