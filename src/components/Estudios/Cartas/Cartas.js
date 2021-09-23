import React from 'react';

export const Cartas = ( { array } ) => {

    return(
        <div className="container d-flex flex-wrap">
            {Object.keys(array).map((foto) => 
                <div className="card col-5">
                    <img src={array[foto]} className="card" alt="..." />
                </div>            
            )}
        </div>
    )
}