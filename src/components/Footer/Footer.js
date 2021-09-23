import React from 'react';
import sam99s from './sam99s.png'
import logoGitHub from './logoGitHub.png'
import logoLinkedIn from './logoLinkedIn.png'
import './Footer.scss'
import { Link } from 'react-router-dom';

export const Footer = () => {
    
    return(
        <footer className="container-fluid d-flex justify-content-around align-items-center">
            <div className="logo col-2 d-flex justify-content-around align-items-center">
                <Link to="/"><img src={sam99s}/></Link>
            </div>

            <div className="contacto col-8 d-flex justify-content-center align-items-center">
                <p className="fs-4 text-center">Email: samuel.schulz.dev@gmail.com</p>
            </div>

            <div className="social col-2 d-flex justify-content-around align-items-center">
                <a href="https://www.linkedin.com/in/sam99s/" target="_blank"><img src={logoLinkedIn} className="imgFooter"/></a>
                <a href="https://github.com/sam99s" target="_blank"><img src={logoGitHub} className="imgFooter"/></a>
            </div>
        </footer>
    )
}
