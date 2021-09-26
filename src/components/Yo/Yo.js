import React, { useState } from 'react';
import './Yo.scss'
import { Estudios } from '../Estudios/Estudios';
import { db } from '../../firebase/config';


export const Yo = () => {

    const [yo, setYo] = useState([])

    
    const ich = async() => {
        try{
            const snapshot = db.collection('yo');
            await snapshot.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }))
                    
                    setYo(data)
                })
            
            
        } catch (err) {
            console.error(err)
        }
    }

    if (yo.length === 0){
        ich()
    }
    
    return(
        <div className="container-fluid">
            <section className="container-fluid text-center mt-5">
                <h1 className="mb-5 text-decoration-underline">Samuel Schulz - Front End Developer</h1>
                <div className="container text-center d-sm-flex sobreMi align-items-center justify-content-between">
                    <p className="col-sm-8 fs-4 text-center">¡Bienvenid@! Este es mi portafolio, en el cual podrás ver la información mas relevante sobre mi, tanto a nivel personal como a nivel profesional. En el mismo podras navegar sobre distintas categorias para profundizar mas respecto del contenido. <br/> ¡Empecemos!🤓</p>
                    {yo.map((i) => <img src={i.image} key={i.id} className="col-12 col-sm-4" alt="Samuel Schulz"/>)}
                </div>
            </section>
            <Estudios />
        </div>
    )
}
