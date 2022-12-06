import logo from './logo.svg';
import './App.css';
import User from './User';
import User1 from './User1';
import {useState} from "react";
// alert("hello");

function App() {
  // let data="petar parker";
  const [data,setData]=useState(0);
  function updateData(){
    // data="thanos";
    // alert(data);
    setData(data+1);
  }
  return (
    <div className="App">
      {/* <h1>JSX</h1>
      {/* <button onClick={apple()}>click me</button> //call atonce */}
      {/* <button onClick={apple}>click me</button> 

      <button onClick={()=>apple()}>click me</button>

      <button onClick={()=>alert("ajay verma")}>click me</button> */}
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>

    

    </div>
  );
}

export default App;
