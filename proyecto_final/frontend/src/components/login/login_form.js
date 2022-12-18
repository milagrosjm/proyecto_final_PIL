//react imports
import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as login_server from './login_server';
import auth  from "../sessionContext"


const Login = () => {
    
    const history = useNavigate();

    const [newLogin,setUser] = useState({
        username:"",
        password:"",
   });

const {username,password} = newLogin;

const changeHandler = e => {
    setUser({...newLogin,[e.target.name]:[e.target.value]});
}

const submitHandler = async e => {
    e.preventDefault();
    try {
        let res;
        res = await login_server.login(newLogin);
        const data = await res.json();

        if (res.status === 200){
            setUser(newLogin)
            auth.username = newLogin.username
            auth.token = data.token
            history("/inicio/"+newLogin.username, {state:{token: data.token}});
        }
        else{
            alert("ERROR. El usuario ingresado o contraseña son incorrectos.")
        }
    } catch{
            console.log('El usuario ingresado no existe.');
    }
}

return (
    <header className="Login-header">
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Iniciar Sesión</h3>
                    <div className="form-group mt-3">
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
                    <div className="form-group mt-3">
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
    </header>
);};

export default Login;