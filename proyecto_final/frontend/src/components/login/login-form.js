//react imports
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {useParams, useNavigate} from 'react-router-dom'
import Select from 'react-select';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports


const Login = () => {
    //const history = useNavigate();
    //const params = useParams();


return (
    <div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Iniciar Sesion</h3>
                <div className="form-group mt-3">
                    <input
                    type="user"
                    className="form-control mt-1"
                    placeholder="Usuario"
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                    Acceder
                    </button>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <label className="text-center">¿No tenes usuario? <Link className="nav-link" to='/registro'>
                                Registrate
                            </Link></label>
                </div>
            </div>
      </form>
    </div>
);

};

export default Login;