import './App.css';
import React from "react";
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { SoloEstudios } from './components/Estudios/SoloEstudios';
import { SoloExperiencia } from './components/Experiencia/SoloExperiencia';
import { Contacto } from './components/Contacto/Contacto';
import { Inicio } from './components/Inicio';

function App() {
  return (
    <div>      
      <Router>
        <Header />            
      
        <Switch>          

          <Route exact path="/estudios">
            <SoloEstudios />
          </Route>

          <Route exact path="/experiencia">
            <SoloExperiencia />
          </Route>

          <Route exact path="/contacto">
            <Contacto />
          </Route>

          <Route exact path="/">
            <Inicio />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>

        </Switch>
        
        <Footer />

      </Router>

    </div>
  );
}

export default App;
