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

    const [toDoItems, setToDoItems] = useState([]);

    const cancelHandler = e => {
        history('/inicio/'+params.username);
    };

    const getToDo = async () => { 
        try{
            const res = await toDo_server.getToDoDetail(params.id);
            const data = await res.json();
            const { id, tittle,user } = data;
            setToDo({ id, tittle,  user});

            const resp = await toDo_server.getToDoItems(id);
            const items = await resp.json();
            setToDoItems(items);
            //console.log(items)
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
                                <br/>
                                <h6>{toDo.tittle}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <strong>Items</strong>
                            </div>
                            {
                                toDoItems.map(item => 
                                <div className="row" key={item.id}>
                                    <div className="col-1 mb-2">
                                        <input className='form-check-input' type='checkbox' disabled defaultChecked={item.checked}></input>
                                    </div>
                                    <div className="col-11 mb-2">
                                        <h6 className="card-title">{item.text}</h6>
                                    </div>
                                    <br/><br/>
                                </div> )
                            }
                        
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2 mt-2 text-end">
                                <button onClick={cancelHandler} className="btn btn-primary">Volver</button>  
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