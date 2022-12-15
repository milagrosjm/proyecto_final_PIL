//react imports
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'

//popper imports
import '@popperjs/core'

//react-dropdown-select imports
import Select from "react-dropdown-select";

//components imports
import *  as note_server from '../note/note_server';
import *  as home_server from './home_server';
import *  as toDo_server from '../toDo/toDo_server';

//react-icons imports
import { RiDeleteBin2Line, RiEdit2Line,  RiAddCircleLine} from "react-icons/ri";
import { BsFillEyeFill} from "react-icons/bs";


import auth  from "../sessionContext";

//Js-Cookie package imports
import Cookies from 'js-cookie';

const Home = () => {

    const [notesData, setNotes] = useState([]);

    const [toDoData, setToDo] = useState([]);


    const history = useNavigate();

    const params = useParams();

    const options = [
        { value: 'EliminarCuenta', label: 'Eliminar Cuenta' },
        { value: 'CerrarSesion', label: 'Cerrar Sesion' },]

    const deleteNoteHandler = async note => {
        if (window.confirm('¿Esta segura de que quiere eliminar la nota "'+ note.tittle + '"?')){
            const res = await note_server.deleteNote(note);
            if (res.status === 200){
                alert('La nota fue eliminada correctamente.');
                listNotes();
            }
            else{
                alert("ERROR. La nota no pudo eliminarse. Intentelo de nuevo.")
            }
        }
    };

    const deleteToDoHandler = async toDoItem => {
        if (window.confirm('¿Esta segura de que quiere eliminar la nota "'+ toDoItem.tittle + '"?')){
            const res = await toDo_server.deleteToDo(toDoItem);
            if (res.status === 200){
                alert('El checkList fue eliminado correctamente.');
                listToDo();
            }
            else{
                alert("ERROR. El checkList no pudo eliminarse. Intentelo de nuevo.")
            }
        }
    };

    const optionHandler = async (value) => {
        console.log(value)
        console.log(value[0].value)
        if (value[0].value === 'EliminarCuenta'){
            if (window.confirm('¿Esta segura de que quiere eliminar la cuenta?')){
                console.log('Eliminar cuenta')
                const res = await home_server.deleteUser(params.username)
                if (res.status === 200){
                    history('/')
                    alert('El usuario "'+params.username+'" fue eliminado correctamente.');
                }
                else{
                    alert("ERROR. El usuario no pudo eliminarse. Intentelo de nuevo.")
                }
            }
        }
        else{
            if (value[0].value === 'CerrarSesion'){
                history('/ingreso')
            }
        }
    };
        
    const listNotes = async () =>{
        try{
            const res = await note_server.getNotes(params.username);
            const notes = await res.json();
            setNotes(notes)
        }catch(error){
            console.log(error);
        }
    }

    const listToDo = async () =>{
        try{
            const res = await toDo_server.getToDo(params.username);
            const toDoList = await res.json();
            setToDo(toDoList)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
            listNotes();
            listToDo();
            console.log(toDoData)
            auth.username = params.username
            auth.token = Cookies.get('token')       
    },[]); 

return (
    <div className='backgroundHome'>
        <nav className="navbar navbar-expand-lg bg-light navbar-light sticky-top">
            <ul className="navbar-nav mr-auto ms-3">
                <li className=" navbar-item navbar-brand">
                    <img src={require('../../resourses/soloLogo.png')} alt="Logo" style={{width:"40px"}}></img>
                </li>
            </ul>
            <ul className="navbar-nav mx-auto">
                <li className=" navbar-item navbar-brand">INICIO</li>
            </ul>
            <ul className="navbar-nav mr-auto">
                <Select
                    options={options}
                    values={[]}
                    placeholder='              '
                    onChange={(value) => optionHandler(value)}
                />
            </ul>
        </nav>
        <div className="Home-container">
            <br/>
            <div className='row'>
                <div className="col-sm-6">
                    <Link className='nav-link' to={{pathname:'/inicio/'+params.username+'/nota/creacion'}}><RiAddCircleLine size={40}/></Link>
                </div>
                <div className="col-sm-6">
                    <Link className='nav-link' to={{pathname:'/inicio/'+params.username+'/checkList/creacion'}}><RiAddCircleLine size={40}/></Link>
                </div>
            </div>
            <br/>
            <br/>
            <div className="row">
                {
                    notesData.map(note => 
                    <div className="col-sm-6" key={note.id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{note.tittle}</h5>
                                <p className="card-text">{note.text}</p>
                            </div>
                            <div className="row">
                                <div className="col-md-10 mb-2 text-end">
                                    <Link className="nav-link" to={{pathname:'/inicio/'+params.username+'/nota/'+note.id}}><RiEdit2Line size={25}/></Link>
                                </div>
                                <div className="col-md-1 mb-2 text-center">
                                    <div className='nav-link' onClick={() => deleteNoteHandler(note)}><RiDeleteBin2Line size={25}/></div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                    </div> )
                }

                {
                    toDoData.map(toDo => 
                    <div className="col-sm-6" key={toDo.id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{toDo.tittle}</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-9 mb-2 text-end">
                                    <Link className="nav-link" to={{pathname:'/inicio/'+params.username+'/detalleCheckList/'+toDo.id}}><BsFillEyeFill size={25}/></Link>
                                </div>
                                <div className="col-md-1 mb-2 text-end">
                                    <Link className="nav-link" to={{pathname:'/inicio/'+params.username+'/checkList/'+toDo.id}}><RiEdit2Line size={25}/></Link>
                                </div>
                                <div className="col-md-1 mb-2 text-center">
                                    <div className='nav-link' onClick={() => deleteToDoHandler(toDo)}><RiDeleteBin2Line size={25}/></div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                    </div> )
                }
            </div> 
        </div>
    </div>
    
);
};

export default Home;

<li className='nav-item dropdown'>
                    <a className="nav-link dropdown-toggle" href="#hola" role="button" id="dropdownMenuLink"  data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul class="dropdown-menu" aria-labelledby='dropdownMenuLink'>
                            <li><a className="dropdown-item" href="#tuki">Action</a></li>
                            <li><a className="dropdown-item" href="#uki">Another action</a></li>
                            <li><a className="dropdown-item" href="#uki">Something else here</a></li>
                        </ul>

                        <select >
                    <option value=" "> </option>
                    <option  value='CerrarSesion'>Cerrar Sesion</option>
                    <option value='EliminarCuenta'>Eliminar Cuenta</option>
                </select>
                </li>