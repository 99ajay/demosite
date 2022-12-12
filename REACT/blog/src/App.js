import logo from './logo.svg';
import './App.css';
import React,{Component, useState} from 'react';
import Student from './Student';
 function App(){
 //const [hide,setstatus]=useState(false);
 const [data,setstatus]=useState(false);

   return (
      <div className='App'>
        {
         data ? <h1>hello world</h1> : null
        }

        <button onClick={()=>setstatus(!data)}>Toggle</button>//toggle case in one button 


       {/* <button onClick={()=>setstatus(false)}>Hide</button> //show hide in case two button show and hide 
       <button onClick={()=>setstatus(true)}>Show</button> */}
      </div>
   );
 }
 
 

export default App;
