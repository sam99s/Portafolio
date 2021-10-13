import './App.css';
import React from "react";
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { SoloEstudios } from './components/Estudios/SoloEstudios';
import { SoloExperiencia } from './components/Experiencia/SoloExperiencia';
import { Contacto } from './components/Contacto/Contacto';
import { Home } from './components/Home/Home';
import { Estudios } from './components/Estudios/Estudios';

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

          <Route path="*">
            <Home />
            <Estudios />
          </Route>

        </Switch>
        
        <Footer />

      </Router>

    </div>
  );
}

export default App;
