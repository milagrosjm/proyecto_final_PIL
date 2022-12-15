//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route   } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

//components imports
import App from './App';
import Registry from './components/registry/registry_form'
import Home from './components/home/home_form'
import Login from './components/login/login_form'
import NoteEdit from './components/note/note_edit_form'
import Note from './components/note/note_create_form'
import ToDo from './components/toDo/toDo_create_form'
import ToDoEdit from './components/toDo/toDo_edit_form'
import ToDoDetail from './components/toDo/toDo_datail_form';
import PrivateRoutes from './components/privateRoute/private_routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/registro" element={<Registry />} />
            <Route element={<PrivateRoutes />}>
                <Route path="/inicio/:username" element={<Home />} />
                <Route path="inicio/:username/nota/:id" element={<NoteEdit/>} />
                <Route path="inicio/:username/nota/creacion" element={<Note/>} />
                <Route path="inicio/:username/checkList/creacion" element={<ToDo/>} />
                <Route path="inicio/:username/checkList/:id" element={<ToDoEdit/>} />
                <Route path="inicio/:username/detallecheckList/:id" element={<ToDoDetail/>} />
            </Route>
            <Route path="/ingreso" element={<Login/>} />
            
          </Routes>
        </div>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
