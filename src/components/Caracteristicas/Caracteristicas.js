import React from 'react';
import './Caracteristicas.scss';
import crecimiento from './crecimiento.jpg';
import cerebro from './cerebro.png';
import metas from './metas.png'

export const Caracteristicas = () => {

    return(
        <section>
            <div className="container-fluid mt-5 mb-5 caracteristicas d-flex align-items-center justify-content-center">
                <div>
                    <span className="tituloSpan">Caracteristicas</span>
                </div>                            
            </div>

            <div className="container">
                <h2 className="text-center text-decoration-underline mb-5">¿Qué me caracteriza?</h2>

                <div className="container">

                    <div className="container d-flex justify-content-between align-items-center mb-5">

                        <p className="col-6  fs-5">Soy una persona que se centra mucho en mejorar sus valores día a día. Me considero una persona con gran perseverancia ante la vida y con una gran resistencia ante las frustraciones que la misma le presenta a uno. Soy muy responsable, poniendo las prioridades por encima de cualquier distracción y esto se debe a que me encanta establecer y cumplir objetivos a corto, mediano y largo plazo🎯... si soy algo estructurado y eso es lo que me da la puntualidad en cada tiempo que realizo una accion determinada.</p>

                        <img src={crecimiento} alt="p1" className="col-4"/>

                    </div>

                    <div className="container d-flex justify-content-between align-items-center mb-5">

                        <img src={cerebro} alt="p2" className="col-4"/>

                        <p className="col-6  fs-5">Por otro lado, me encanta el área de la lógica, a tal punto que llegue a competir en planos internacionales con el ajedrez ♟️, deporte al cual le agradezco mucho por haberme enseñado a como dar cada paso en mi vida.</p>

                    </div>

                    <div className="container d-flex justify-content-between align-items-center mb-5">

                        <p className="col-6  fs-5">Y no podia saltearme los objetivos que tengo, ya que como redactaba anteriormente, significan muhco para mi. Los mismos constan hoy principalmente de aprender a programar más y mejor 🤓, crecer financieramente 📈 y conocer el mundo 🌏.</p>

                        <img src={metas} alt="p3" className="col-4"/>
                        
                    </div>
                </div>

            </div>

        </section>
    )
    
}
