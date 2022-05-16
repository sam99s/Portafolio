import React, { useState } from 'react';
import { db } from '../../firebase/config';
import './soloExperiencia.scss'

export const SoloExperiencia = () => {

    const [experience, setExperience] = useState([])

    
    const allStudies = async() => {
        try{
            const snapshot = db.collection('SoloExperiencia');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setExperience(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (experience.length === 0){
        allStudies()
    }
    
    return(
        <div className="container-fluid">

            <div className="container-fluid SoloExperiencia d-flex align-items-center justify-content-center">
                <div>
                    <span className="tituloSpan">Experiencia</span>
                </div>                            
            </div>

            <div className="container">
                <p className="mb-5 mt-5 fs-4 text-center">Esta es la sección donde encontraras más informacion respecto a mi experiencia en la programación🤓</p>
                <p className="mb-5 mt-5 fs-4 text-center">¿Listo para conocer más sobre mi? ¡Vamos!💪</p>
            </div>

            <div className="container experience">
                {experience.map((proyect) => 
                <div className="container mt-5" key={proyect.id}>
                    <h2 className="text-center text-decoration-underline mb-5">{proyect.title}</h2>
                    <div className="container d-block d-sm-flex justify-content-between align-items-center">
                        <img src={proyect.image} alt={proyect.title} className="col-12 col-sm-4 imageExperience"/>
                        <p className="col-12 col-sm-6 fs-5 text-center">{proyect.description}</p>
                    </div>

                    <div className="container">    
                        <div className="d-flex align-items-center justify-content-center gifContainer">
                            <img src={proyect.vista} alt={proyect.title} className="col-8 col-md-6 gifImage"/>
                        </div>

                        {
                        proyect.website 

                        ? 

                        <div className="container d-flex align-items-center justify-content-center">
                            <a href={proyect.sitio} target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-light repositorio">Visitar Sitio</button></a>
                        </div> 

                        :

                        <div className="container d-flex align-items-center justify-content-center">
                            <a href={proyect.sitio} target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-light repositorio">Visitar Repositorio</button></a>
                        </div> 
                        }                    
                    </div>

                    <p className="col-12 fs-5 text-center">{proyect.more}</p>
                    <hr />
                </div>
                )}

            </div>
            <p className="container parrafoFinal text-center fs-5">En mi perfil de GitHub (link en el pie de pagina), podras encontrar el codigo de dichos proyectos. Cualquier aporte que quieras realizar ¡bienvenido sea!, podras hacerlo en la seccion de contacto📩</p>
        </div>
    )
}
