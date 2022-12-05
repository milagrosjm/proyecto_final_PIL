import logo from './logo.svg';
import './App.css';

//react imports
import {Link} from 'react-router-dom'

//components imports
import Login from './components/login/login_form'

function App() {
  return (
    <div >
      <header className="App-header">
        <div>
          Bienvenidos a noteR
        </div>
        <div>
          <Link className="nav-link" to='/ingreso'>Iniciar sesion</Link>
        </div>
      </header>
    </div>
  );
}

export default App;

//className="App"