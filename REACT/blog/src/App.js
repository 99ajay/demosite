import logo from './logo.svg';
import './App.css';
import React,{Component, useState} from 'react';
import Student from './Student';
function App(){
   const [data,setData]=useState(null);
   const [pdata,printData]=useState(false);
   function getData(e)
   {
      console.log(e.target.value);
      setData(e.target.value);
      //printData(false);
   }
   return(
      <div className='App'>
         {
           pdata ? <h1>{data} </h1> : null
         }
        <input onChange={getData}></input>
        <button onClick={()=>printData(true)}>print_data</button>

      </div>
   );
}
 

 
 

export default App;
