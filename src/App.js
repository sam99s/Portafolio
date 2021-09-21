import './App.css';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Yo } from './components/Yo/Yo';
import { Estudios } from './components/Estudios/Estudios';
import { Footer } from './components/Footer/Footer';
import { Caracteristicas } from './components/Caracteristicas/Caracteristicas';
import { Experiencia } from './components/Experiencia/Experiencia';
import { Cierre } from './components/Cierre/Cierre';

function App() {
  return (
    <div>

      <Header />

      <Yo />

      <Estudios />

      <Caracteristicas />

      <Experiencia />

      <Cierre />

      <Footer />

    </div>
  );
}

export default App;
