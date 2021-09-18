import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Header.scss'
import sam99s from './sam99s.png'

export const Header = () => {
    return(
        <header className="container-fluid d-flex justify-content-around align-items-center">
            <div className="logo">
                <img src={sam99s} alt="Logo sam99s" />
            </div>
            <nav className="menu">
                <ul className="d-flex justify-content-around">
                    <li>Estudios</li>
                    <li>Experiencia</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

