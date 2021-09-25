import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Contacto.scss'

export const Contacto = () => {

    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const response = await fetch(e.target.action, {
            method: e.target.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if(response.ok){
            e.target.reset();
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje Enviado!',
                text: `Gracias por comunicarte😊`,
                confirmButtonText: '✔'
            })
        }
    }

    return(
        <div className="container mt-5 text-center">
            <div className="container">
                <h2 className="text-center text-decoration-underline">Contacto</h2>
                <p className="fs-3">Este espacio es para que puedan dejar sus datos y mensaje que quieren hacerme llegar. Con ellos podré ponerme en contacto a la brevedad y resolver cualquier tipo de duda/consulta y/o establecer reuniones😊</p>
                <hr className="txtContact"/>
            </div>

            <form onSubmit={handleSubmit} id='form' action="https://formspree.io/f/mayavzjg" method="POST">
                <div class="mb-3 text-center centerBox">
                    <label for="nameUser" class="form-label fs-3">Nombre</label>
                    <input name="name" type="name" class="form-control" id="nameUser" placeholder="Juan Perez" required/>
                </div>
                <div class="mb-3 text-center centerBox">
                    <label for="emailAddress" class="form-label fs-3">Correo Electrónico</label>
                    <input name="mail" type="email" class="form-control" id="emailAddress" placeholder="name@example.com" required/>
                </div>
                <div class="mb-3 text-center centerBox">
                    <label for="celular" class="form-label fs-3">Teléfono de Contacto</label>
                    <input type="tel" name="tel" class="form-control" id="celular" placeholder="Ej: 03511234567" required/>
                </div>
                <div class="mb-3">
                    <label for="txtArea" class="form-label fs-3">Mensaje</label>
                    <textarea name="message" class="form-control" id="txtArea" rows="3" placeholder="Escribir aqui..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-success">Enviar</button>
            </form>

        </div>
    )
}
