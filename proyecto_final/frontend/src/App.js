import './App.css';

//react imports
import {Link} from 'react-router-dom'

//components imports

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className='background'>
      <nav className='navbar transparent navbar-expand-lg sticky-top'>
        <div className='container-fluid'>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item navbar-brand">
                <Link className="nav-link app-nav" to='/ingreso'>Iniciar sesión</Link>
              </li>
              <li className="nav-item navbar-brand">
                <Link className="nav-link app-nav" to='/registro'>Registrarse</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

//className="App"

<div className='text-center'>
          <img src={require('./resourses/logoYNombre.png')} alt='Logo de la pagina' style={{width:"300px"}}/>
        </div>