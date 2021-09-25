import React from 'react';
import { Cartas } from './Cartas';

export const CartasContainer = ({id, title, image, description, more, web, javascript, vista = ""}) => {



    return(
        <div className="container-fluid">
            <div className="col-12 mt-5" id={id}>
                <h2 className="col-12 text-center mb-5 text-decoration-underline">{title}</h2>
                <div className="container-fluid d-block d-sm-flex justify-content-between align-items-center">
                    <img src={image} alt={title} className="col-12 col-sm-4 imageStudy"/>
                    <p className="col-12 col-sm-6 fs-5 text-center">{description}</p>
                </div>                
                <p className="col-12 fs-5">{more}</p>                        
            </div>  

            
            {/* Card */}
            <div className="container d-block d-md-flex justify-content-between">
                {/* para Cards de Platzi Desarrollo Web*/}
                <div className="col-12 col-md-6 col-lg-4">
                    <h3 className="text-center">Desarrollo Web</h3>
                    <Cartas array={web}/>
                </div>
                {/* para Cards de Platzi Javascript*/}
                <div className="col-12 col-md-6 col-lg-4">
                    <h3 className="text-center">Javascript</h3>
                    <Cartas array={javascript}/>
                </div>
                
                                         
                
            </div>

        </div>
    )
    
}
