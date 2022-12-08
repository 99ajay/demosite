import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Student from './Student';
 

 
   function App()
   {
    return(
    <div className="App"> 
     <h1>props in react</h1>
     <Student name={"ajay"} mail={"ajayverma@gmail.com"} address={{village :'mahangipur',post : "raisipur"}}/>
     <Student name={"ajay"} mail={"ajayverma@gmail.com"} address={{village :'mahangipur',post : "raisipur"}}/>
     <Student name={"ajay"} mail={"ajayverma@gmail.com"} address={{village :'mahangipur',post : "raisipur"}}/>
     <Student name={"ajay"} mail={"ajayverma@gmail.com"} address={{village :'mahangipur',post : "raisipur"}}/>

     <Student name={"ajay"} mail={"ajayverma@gmail.com"} address={{village :'mahangipur',post : "raisipur"}}/>
    </div>
    );
   }
 

export default App;
