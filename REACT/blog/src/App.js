import logo from './logo.svg';
import './App.css';
//import React,{Component, useState} from 'react';
import Student from './Student';
import React from "react";
 

 class App extends React.Component{
   constructor(){
      super();
      this.state={name: "amit patel"};
   }
   render()
   {
     return(
      <div className='App'>
       <Student name={this.state.name} email="ajayverma041999@gmail.com"/>
       <button onClick={()=>{this.setState({name:"ajay verma"})}}>Update name</button>
      </div>
   
    );
   }
}
 

export default App;
