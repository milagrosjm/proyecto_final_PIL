import React, {useState} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as toDo_server from './toDo_server';

const ToDo = () => {

    const history = useNavigate();
    const params = useParams();

    const [toDo,setToDo] = useState({
        tittle:"",
        user:params.username,
   });

    const {id, tittle, user_id} = toDo;

    const changeHandler = e => {
    setToDo({...toDo,[e.target.name]:[e.target.value]});
    };

    const [items, setInputList] = useState([{ text: "", checked: false }]);

    const inputChangeHandler = (e, index) => {
        const { name, value } = e.target;
        const list = [...items];
        list[index][name] = value;
        setInputList(list);
      };

    const addClickHandler = () => {
        setInputList([...items, { text: "", checked: false }]);
      };

    const checkboxChangeHandler = (e, index) => {
        const {name, value} = e.target
        const list = [...items];
        list[index][name] = e.target.checked;
        setInputList(list);
    };

    const cancelHandler = e => {
        history('/inicio/'+params.username);
    };

    var res,resp;
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            res = await toDo_server.createToDo(toDo);
            const data = await res.json();
            const id = data['id']
            resp = await toDo_server.createItems(items, id);
            if (res.status === 201){
                alert('El checkList fue creado correctamente.');
                history('/inicio/'+params.username);
            }
            else{
                alert("ERROR. El checkList no pudo crearse.")
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
                    <h3 className="Registry-form-title">Crear CheckList</h3>
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
                                <small style={{color:"grey"}}>(M??ximo 35 caracteres)</small>
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
    
);};

export default ToDo;