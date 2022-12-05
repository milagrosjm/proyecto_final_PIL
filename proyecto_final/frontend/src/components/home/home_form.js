import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'

//components imports
import *  as home_server from './home_server';

const Home = () => {

    const [notesData, setNotes] = useState([]);

    const params = useParams();
        
    const listNotes = async () =>{
        try{
            const res = await home_server.getNotes(params.username);
            const notes = await res.json();
            setNotes(notes)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        listNotes();
    },[]); 

return (
    <div className="Home-container">
        <div className="row">
            {
                notesData.map(note => 
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{note.tittle}</h5>
                            <p className="card-text">{note.text}</p>
                        </div>
                    </div>
                </div>)
            }
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