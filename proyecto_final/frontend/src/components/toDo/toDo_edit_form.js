import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as toDo_server from './toDo_server';

const ToDoEdit = () => {

    const history = useNavigate();
    const params = useParams();

    const [toDo,setToDo] = useState({
        id: 0,
        tittle:"",
        user:params.username,
    });
    const [itemsList,setItems] = useState([]);

    const {id, tittle, user_id} = toDo;

    const getToDo = async () => { 
        try{
            const res = await toDo_server.getToDoDetail(params.id);
            const data = await res.json();
            const { id, tittle,user } = data;
            setToDo({ id, tittle, user});

            const resp = await toDo_server.getToDoItems(params.id);
            const dt = await resp.json();
            setItems(dt);
        } catch (error){
            console.log(error);
        }
        };

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

    const oldItemsCheckboxChangeHandler = (e, index) => {
        const {name, value} = e.target
        const list = [...itemsList];
        list[index][name] = e.target.checked;
        setItems(list);
    };


    const cancelHandler = e => {
        history('/inicio/'+params.username);
    };

    var res,resp, respu;
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            res = await toDo_server.updateToDo(toDo);
            resp = await toDo_server.updateItems(itemsList, toDo.id);
            if (items[0].text !== ''){
                //there is new items
                respu = await toDo_server.createItems(items, params.id)
            }
            if (res.status === 200){
                alert('El checkList fue modificado correctamente.');
                history('/inicio/'+params.username);
            }
            else{
                alert("ERROR. El checkList no pudo modificarse.")
            }
        } catch (error) {
          console.log(error);
        }
    };

    useEffect(() => {
        if (params.id) {
          getToDo(params.id);
        }
      }, []);


return (
    <div className="CreateNote-container">
        <div className="Auth-form-container">
            <form className="Registry-form" onSubmit={submitHandler}>
                <div className="Auth-form-content">
                    <h3 className="Registry-form-title">Editar CheckList</h3>
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
                        <br/>
                        <div className="row">
                            <div className="col-10 mb-2">
                                <strong>Items</strong>
                            </div>
                            <div className="col-2 mb-2 text-center">
                                <button type="button" className="btn btn-secondary" onClick={addClickHandler}>+</button>
                            </div>
                            {itemsList.map((item, index) => {return (
                                <div className="row" key={item.id}>
                                    <div className="col-1 mb-2">
                                        <input className="form-check-input"
                                        type="checkbox"
                                        name="checked"
                                        onChange={e => oldItemsCheckboxChangeHandler(e,index)}
                                        defaultChecked={item.checked}
                                        />
                                    </div>
                                    <div className="col-11 mb-2">
                                        <input
                                        type="text"
                                        name="text"
                                        value={item.text}
                                        onChange={e => inputChangeHandler(e, index)}
                                        className="form-control mt-1"
                                        placeholder="Texto"
                                        disabled
                                        />
                                    </div>
                                </div>
                            )})}
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

export default ToDoEdit;