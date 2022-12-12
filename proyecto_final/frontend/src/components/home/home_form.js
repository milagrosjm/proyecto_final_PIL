//react imports
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from "react";
import {useParams, useNavigate, useLocation} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as note_server from '../note/note_server';

//react-icons imports
import { RiDeleteBin2Line, RiEdit2Line,  RiAddCircleLine,RiAddFill } from "react-icons/ri";
import Login from '../login/login_form';


const Home = () => {

    const location = useLocation();

    const [notesData, setNotes] = useState([]);

    const history = useNavigate();

    const params = useParams();

    const deleteHandler = async note => {
        //console.log(note)
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
        
    const listNotes = async () =>{
        try{
            const res = await note_server.getNotes(params.username);
            const notes = await res.json();
            setNotes(notes)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        let token = location.state.token
        if (!token){
            history('/ingreso')
        }
        else{
            listNotes();
        }        
    },[]); 

return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <ul className="navbar-nav mr-auto ms-3">
                <li className=" navbar-item navbar-brand">
                    <img src={require('../../resourses/soloLogo.png')} alt="Logo" style={{width:"40px"}}></img>
                </li>
            </ul>
            <ul className="navbar-nav mx-auto">
                <li className=" navbar-item navbar-brand">INICIO</li>
            </ul>
        </nav>
        <div className="Home-container">
            <Link className='nav-link' to={{pathname:'/inicio/'+params.username+'/nota/creacion'}}><RiAddCircleLine size={40}/></Link>
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
                                    <div className='nav-link' onClick={() => deleteHandler(note)}><RiDeleteBin2Line size={25}/></div>
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

<div className="row">
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
        </div>
