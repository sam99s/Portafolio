import './App.css';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route, Redirect, HashRouter} from 'react-router-dom'
import { SoloEstudios } from './components/Estudios/SoloEstudios';
import { SoloExperiencia } from './components/Experiencia/SoloExperiencia';
import { Contacto } from './components/Contacto/Contacto';
import { Home } from './components/Home/Home';  

function App() {
  return (
    <div>      
      <HashRouter>
        <Header />            
      
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

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
            <Redirect to="/" />
          </Route>

        </Switch>
        
        <Footer />

      </HashRouter>

    </div>
  );
}

export default App;
