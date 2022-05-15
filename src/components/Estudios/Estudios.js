import React, { useState } from 'react';
import './Estudios.scss';
import { Proximos } from './Proximos';
import { Link } from 'react-router-dom';
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
    
    return(
        <div className="container-fluid">
            <section>
                <div className="container-fluid mt-5 mb-5 estudios d-flex align-items-center justify-content-center">
                    <div>
                        <span className="tituloSpan">Estudios</span>
                    </div>                            
                </div>

                <div className="container cursos">
                    {curso.map((study) => <div className="col-12 mt-5" key={study.id}>
                        <h2 className="text-center mb-5">{study.title}</h2>
                        <div className="container d-flex justify-content-between align-items-center">
                            <img src={study.image} alt={study.title} className="col-4 imageStudy"/>
                            <p className="col-6 fs-5">{study.description}</p>
                        </div>
                    </div>)}
                </div>

                <Link to="/estudios">
                    <div className="container d-flex justify-content-center">
                        <button className="btn btn-outline-light mt-5 text-center fs-4">+Estudios</button>
                    </div>
                </Link>

                <div className="container proximos mt-5 mb-5"><Proximos /></div>
            
            </section>
        </div>
    )
}
