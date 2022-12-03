//react imports
import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Select from 'react-select';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports


const Registry = () => {
    
return (
    <div className="Registry-container">
        <div className="Auth-form-container">
            <form className="Registry-form">
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Crear cuenta</h3>
                    <div className="form-group mt-3">
                        <input
                        type="user"
                        className="form-control mt-1"
                        placeholder="Nombre"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="user"
                        className="form-control mt-1"
                        placeholder="Apellido"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="user"
                        className="form-control mt-1"
                        placeholder="Email"
                        />
                    </div>
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
                        Registrar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
 
);

};

export default Registry;