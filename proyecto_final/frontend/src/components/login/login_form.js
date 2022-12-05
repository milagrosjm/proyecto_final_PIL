//react imports
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports


const Login = () => {
    const history = useNavigate();
    const params = useParams();

    const [user,setData] = useState({
        username:"",
        password:"",
   });

   const {username,password} = user;

   const changeHandler = e => {
    setData({...user,[e.target.name]:[e.target.value]});
    }

    const submitHandler = e => {
        e.preventDefault();
        //console.log(user);
        try {
            //res = await registry_server.login(data);
            if (user.password[0] === 'm123' & user.username[0] === 'milagrosjm')
                history("/inicio/"+user.username);
          } catch{
            console.log('El usuario ingresado no existe');
          }
        }

return (
    <header className="Login-header">
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Iniciar Sesion</h3>
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
);

};

export default Login;