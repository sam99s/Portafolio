import React from 'react';
import { Caracteristicas } from '../Caracteristicas/Caracteristicas';
import { Cierre } from '../Cierre/Cierre';
import { Estudios } from '../Estudios/Estudios';
import { Experiencia } from '../Experiencia/Experiencia';
import { Yo } from '../Yo/Yo';

export const Home = () => {

    return(
        <div className="container-fluid">
            <Yo />
            <Estudios />
            <Caracteristicas />
            <Experiencia />
            <Cierre />
        </div>
    )
    
}
