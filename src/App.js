import './App.css';
import { Header } from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Yo } from './components/Yo/Yo';
import { Estudios } from './components/Estudios/Estudios';

function App() {
  return (
    <div>

      <Header />

      <Yo />

      <Estudios />

    </div>
  );
}

export default App;
