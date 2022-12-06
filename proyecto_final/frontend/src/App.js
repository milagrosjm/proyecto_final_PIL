import logo from './logo.svg';
import './App.css';

//react imports
import {Link} from 'react-router-dom'

//components imports
import Login from './components/login/login_form'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid'>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item navbar-brand">
                <Link className="nav-link" to='/ingreso'>Iniciar sesion</Link>
              </li>
              <li class="nav-item navbar-brand">
                <Link className="nav-link" to='/registro'>Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
        <div className='text-center'>
          <img src={require('./resourses/logoYNombre.png')} alt='Logo de la pagina' style={{width:"300px"}}/>
        </div>
        <br/><br/>
        <div className='tittle'>
          Bienvenidos a noteR
        </div>
      </header>
    </div>
  );
}

export default App;

//className="App"