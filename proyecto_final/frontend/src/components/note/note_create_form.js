import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as note_server from './note_server';

//react-icons imports


const Note = () => {

    const history = useNavigate();
    const params = useParams();

    const [note,setNote] = useState({
        tittle:"",
        text:"",
        type:1,
        user:params.username,
   });

   const {id, tittle, text, type, user_id} = note;

   const changeHandler = e => {
    //console.log(note)
    setNote({...note,[e.target.name]:[e.target.value]});
    };

    const cancelHandler = e => {
        history('/inicio/'+params.username);
    };

    var res;
    const submitHandler = async (e) => {
        //console.log(note);
        e.preventDefault();
        try {
            res = await note_server.createNote(note);
            //const data = res.json()
            //console.log(data)
            if (res.status === 201){
                alert('La nota fue creada correctamente.');
                history('/inicio/'+params.username);
            }
            else{
                alert("ERROR. La nota no pudo crearse.")
            }
            
        } catch (error) {
          console.log(error);
        }
    };


return (
    <div className="CreateNote-container">
        <div className="Auth-form-container">
            <form className="Registry-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Crear Nota</h3>
                    <div className="form-group mt-3">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <strong>Titulo</strong>
                                <input
                                type="text"
                                name="tittle"
                                value={tittle}
                                className="form-control mt-1"
                                placeholder="Titulo"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <strong>Texto</strong>
                                <textarea
                                type="text"
                                name="text"
                                value={text}
                                className="form-control mt-1"
                                placeholder="Texto"
                                onChange={changeHandler}
                                required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mb-2 mt-2 text-end">
                                <button onClick={cancelHandler} className="btn btn-primary">Cancelar</button>  
                            </div>
                            <div className="col-2 mt-2 mb-2">
                                <button type="submit" className="btn btn-primary">Guardar</button> 
                            </div>
                        </div>
                    </div>                  
                </div>
            </form>
        </div> 
    </div>
    
);
};

export default Note;