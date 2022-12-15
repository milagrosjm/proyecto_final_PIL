import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as toDo_server from './toDo_server';

//react-icons imports



const ToDoDetail = () => {

    const history = useNavigate();
    const params = useParams();

    const [toDo,setToDo] = useState({
        id:0,
        tittle:"",
        user:""
    });

    const getToDo = async () => { 
        try{
            const res = await toDo_server.getToDo(params.id);
            const data = await res.json();
            const { id, tittle,user } = data;
            setToDo({ id, tittle,  user});

            const resp = await toDo_server.getToDoItems(id);
            const dt = await resp.json();
            console.log(dt)
        } catch (error){
            console.log(error);
    
        }
        };

    useEffect(()=>{;
        getToDo();
        toDo_server.getToDoItems()
    },[]); 

return (
    <div className="CreateNote-container">
        <div className="Auth-form-container">
            <form className="Registry-form">
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Crear CheckList</h3>
                    <div className="form-group mt-3">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <strong>Titulo</strong>
                                <h3>{toDo.tittle}</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-10 mb-2">
                                <strong>Items</strong>
                            </div>
                            <div className="col-2 mb-2 text-center">
                                <button type="button" className="btn btn-secondary" onClick={addClickHandler}>+</button>
                            </div>
                            {items.map((x, i) => {return (
                                <div className="row">
                                    <div className="col-1 mb-2">
                                        <input className="form-check-input"
                                        type="checkbox"
                                        name="checked"
                                        onChange={e => checkboxChangeHandler(e,i)}
                                        checked={x.checked}
                                        />
                                    </div>
                                    <div className="col-11 mb-2">
                                        <input
                                        type="text"
                                        name="text"
                                        value={x.text}
                                        onChange={e => inputChangeHandler(e, i)}
                                        className="form-control mt-1"
                                        placeholder="Texto"
                                        required
                                        />
                                    </div>

                                </div>
                            )})}
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
}

export default ToDoDetail;