import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { db } from '../../firebase/config';
import './Header.scss'

export const Header = () => {

    const [logos, setLogos] = useState([])

    
    const logosFotos = async() => {
        try{
            const snapshot = db.collection('logos');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setLogos(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (logos.length === 0){
        logosFotos()
    }

    return(
        <header className="container-fluid d-block d-sm-flex justify-content-around align-items-center">
            <div className="logo col-sm-2 col-md-2 col-lg-4">
            {logos.map((foto) => foto.sam ? <Link to="/contacto"><img src={foto.sam} alt="Logo sam99s" key={foto.id} /></Link> : <></>)}
                
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

