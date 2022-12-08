import logo from './logo.svg';
import './App.css';
import React,{Component, useState} from 'react';
import Student from './Student';
 

 
   function App()
   {
     const [data,setState]=useState("ajay verma");
    return(
    <div className="App"> 
     <h1>props in react</h1>
     <Student name={data} />
     <button onClick={()=>{setState("Bholuu Patel")}}>update name</button>
     
    </div>
    );
   }
 

export default App;
