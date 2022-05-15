import React from 'react';
import './Cartas.scss'

export const Cartas = ( { array } ) => {

    return(
        <div className="container d-flex flex-wrap">
            {Object.keys(array).map((foto) => 
                <div className="card card-img-platzi col-5" key={foto}>
                    <img src={array[foto]} className="card" alt="..." />
                </div>            
            )}
        </div>
    )
}