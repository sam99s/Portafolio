import React, { useState, useEffect } from 'react';
import './Estudios.scss';
import { db } from '../../firebase/config';

export const Estudios = () => {

    const [curso, setCurso] = useState([])

    
    const allStudies = async() => {
        try{
            const snapshot = db.collection('estudios');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setCurso(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (curso.length === 0){
        allStudies()
    }

    useEffect(() => {
        console.log("Curso: ", curso)
    }, [curso])
    
    return(
        <section>
            <div>
                <div className="container-fluid mt-5 mb-5 estudios d-flex align-items-center justify-content-center">
                    <div>
                        <span className="tituloSpan">Estudios</span>
                    </div>                            
                </div>
            
            </div> 

            <div className="container cursos">
                {curso.map((study) => <div className="col-12 mt-5">
                    <h2 className="text-center">{study.title}</h2>
                    <div className="container d-flex justify-content-between align-items-center">
                        <img src={study.image} alt={study.title} className="col-4"/>
                        <p className="col-6">{study.description}</p>
                    </div>
                </div>)}
            </div>
        
        </section>
    )
}
