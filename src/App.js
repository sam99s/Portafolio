import './App.css';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Yo } from './components/Yo/Yo';
import { Estudios } from './components/Estudios/Estudios';
import { Footer } from './components/Footer/Footer';
import { Caracteristicas } from './components/Caracteristicas/Caracteristicas';
import { Experiencia } from './components/Experiencia/Experiencia';
import { Cierre } from './components/Cierre/Cierre';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { SoloEstudios } from './components/Estudios/SoloEstudios';


function App() {
  return (
    <div>      
      <Router>
        <Header />            
      
        <Switch>

          <Route exact path="/">
            <Yo />
            <Estudios />
            <Caracteristicas />
            <Experiencia />
            <Cierre />
          </Route>

          <Route exact path="/estudios">
            <SoloEstudios />
          </Route>

          <Route exact path="/experiencia"></Route>

          <Route exact path="/contacto"></Route>

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
