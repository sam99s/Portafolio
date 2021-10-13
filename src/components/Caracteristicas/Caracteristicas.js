import React, { useState } from 'react';
import './Caracteristicas.scss';
import { db } from '../../firebase/config';


export const Caracteristicas = () => {

    const [features, setFeatures] = useState([])

    
    const featuresDB = async() => {
        try{
            const snapshot = db.collection('features');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setFeatures(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (features.length === 0){
        featuresDB()
    }

    return(
        <div className="container-fluid">
            <section>
                <div className="container-fluid mt-5 mb-5 caracteristicas d-flex align-items-center justify-content-center">
                    <div>
                        <span className="tituloSpan">Caracteristicas</span>
                    </div>                            
                </div>

                <div className="container">

                    <h2 className="text-center text-decoration-underline mb-5">¿Qué me caracteriza?</h2>

                    <div className="container">
                        {features.map((carac) => <div key={carac.id} className="container d-flex justify-content-between align-items-center mb-5">
                            <p className="col-6 fs-5">{carac.description}</p>
                            <img src={carac.image} alt="foto" className="col-4"/>
                            </div>)}
                    </div>

                </div>

            </section>
            
        </div>
    )
    
}
