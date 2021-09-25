import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase/config';
import './Proximos.scss'

export const Proximos = () => {

    const [pronto,setPronto] = useState([]);

    const othersStudies = async() => {

        try{
            const snapshot = db.collection('proximos');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setPronto(data)
                })

        } catch(err){
            console.log('Error: ', err)
        }

    }

    if(pronto.length === 0){
        othersStudies()
    }

    useEffect(() => {
        console.log("Pronto: ", pronto)
    }, [pronto])

    return(
        <div className="container">
            <h3 className="text-decoration-underline text-center corte">¿Qué sigo estudiando?</h3>
            {pronto.map((study) => <div className="col-12 mt-5" id={study.id}>
                <h2 className="text-center">{study.title}</h2>
                <div className="container d-flex justify-content-between align-items-center">
                    <p className="col-6 fs-5">{study.description}</p>
                    <img src={study.image} alt={study.title} className="col-4 imageStudy"/>
                </div>
            </div>)}
        </div>
    )
    
}
