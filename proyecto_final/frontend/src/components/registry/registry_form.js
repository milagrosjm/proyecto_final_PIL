//react imports
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as registry_server from './registry_server';


const Registry = () => {

    const history = useNavigate();

    const [user,setUser] = useState({
        name:"",
        lastname:"",
        email:"",
        username:"",
        password:"",
        is_active: true,

   });

   const {name, lastname, email, username, password} = user;

   const changeHandler = e => {
    setUser({...user,[e.target.name]:[e.target.value]});
    }

    var res;
    const submitHandler = async e => {
        e.preventDefault();
        //console.log(user);
        try {
            console.log(user)
            res = await registry_server.registerUser(user);
            //console.log(res)
            if (res.status === 201){
                //console.log(res.status)
                alert('El usuario fue registrado correctamente.');
                history("/ingreso");
            }
            else{
                alert("ERROR. No se pudo registrar el usuario.")
            }
          } catch{
            alert("ERROR. No se pudo registrar el usuario.")
            //console.log('Error al registrar usuario');
          }
        }

    
return (
    <div className="Registry-container">
        <div className="Auth-form-container">
            <form className="Registry-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Crear cuenta</h3>
                    <div className="form-group mt-3">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <input
                                type="text"
                                name="name"
                                value={name}
                                className="form-control mt-1"
                                placeholder="Nombre"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input
                                type="text"
                                name="lastname"
                                value={lastname}
                                className="form-control mt-1"
                                placeholder="Apellido"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <input
                                type="email"
                                name="email"
                                value={email}
                                className="form-control mt-1"
                                placeholder="Email"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <input
                                type="text"
                                name="username"
                                value={username}
                                className="form-control mt-1"
                                placeholder="Usuario"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <input
                                type="password"
                                name="password"
                                value={password}
                                className="form-control mt-1"
                                placeholder="Contraseña"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
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