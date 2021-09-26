import React, { useState } from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';

export const Footer = () => {

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
        <footer className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo col-2 d-flex justify-content-around align-items-center">
                {logos.map((foto) => foto.sam ? <Link to="/"><img src={foto.sam} alt="Logo"/></Link> : <></>)}
            </div>

            <div className="social col-2 d-flex justify-content-around align-items-center">
                {logos.map((foto) => foto.linkedin ? <a href="https://www.linkedin.com/in/sam99s/" target="_blank" rel="noreferrer"><img src={foto.linkedin} className="imgFooter" alt="LinkedIn"/></a> : <></>)}
                {logos.map((foto) => foto.github ? <a href="https://github.com/sam99s" target="_blank" rel="noreferrer"><img src={foto.github} className="imgFooter" alt="GitHub"/></a> : <></>)}        
            </div>
        </footer>
    )
}
