import React from 'react';
import { useState } from 'react/cjs/react.development';
import { db } from '../../firebase/config';
import { Cierre } from '../Cierre/Cierre';
import './Experiencia.scss';



export const Experiencia = () => {

    const [experiencias, setExperiencias] = useState([])

    
    const allExperience = async() => {
        try{
            const snapshot = db.collection('experiencia');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setExperiencias(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (experiencias.length === 0){
        allExperience()
    }

    return(
        <div className="container-fluid">
            <section>
                <div className="container-fluid mt-5 mb-5 experiencia d-flex align-items-center justify-content-center">
                    <div>
                        <span className="tituloSpan">Experiencia</span>
                    </div>                            
                </div>

                <div>
                    {experiencias.map((experience) => <div className="container mt-5" key={experience.id}>
                        <h2 className="text-start text-decoration-underline mb-5">{experience.title}</h2>
                        <div className="container d-flex justify-content-between align-items-center">
                            <p className="col-6 fs-5">{experience.description}</p>
                            <div className="col-4 d-flex flex-column align-items-center">
                                <img src={experience.image} alt={experience.title} className="experience-image mb-5"/>
                                <a href={experience.sitio} target="_blank" rel="noreferrer" className="fs-5"><button className="fs-5 btn btn-outline-info text-center">Ver Sitio</button></a>
                            </div>
                        </div>
                        <hr/>
                        
                    </div>)}
                </div>
            </section>
            <Cierre />
        </div>
    )
    
}
