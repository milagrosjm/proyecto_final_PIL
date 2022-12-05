//react imports
import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import Select from 'react-select';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as registry_server from './registry_server';


const Registry = () => {

    const history = useNavigate();
    const params = useParams();

    const [user,setUser] = useState({
        name:"",
        lastname:"",
        email:"",
        username:"",
        password:"",

   });

   const {name, lastname, email, username, password} = user;

   const changeHandler = e => {
    setUser({...user,[e.target.name]:[e.target.value]});
    }

    var res;
    const submitHandler = async e => {
        e.preventDefault();
        console.log(user);

        try {
            res = await registry_server.registerUser(user);
            console.log(res)
            //history("/");
          } catch{
            console.log('Error al registrar usuario');
          }
        }

    
return (
    <div className="Registry-container">
        <div className="Auth-form-container">
            <form className="Registry-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Crear cuenta</h3>
                    <div className="form-group mt-3">
                        <input
                        type="text"
                        name="name"
                        value={name}
                        className="form-control mt-1"
                        placeholder="Nombre"
                        onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        className="form-control mt-1"
                        placeholder="Apellido"
                        onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="email"
                        name="email"
                        value={email}
                        className="form-control mt-1"
                        placeholder="Email"
                        onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="text"
                        name="username"
                        value={username}
                        className="form-control mt-1"
                        placeholder="Usuario"
                        onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                        type="password"
                        name="password"
                        value={password}
                        className="form-control mt-1"
                        placeholder="Contraseña"
                        onChange={changeHandler}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" on>
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