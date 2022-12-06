import logo from './logo.svg';
import './App.css';
import User from './User';
import User1 from './User1';
// alert("hello");

function App() {
  let data="petar parker";
  function apple(){
    data="thanos";
    alert(data);
  }
  return (
    <div className="App">
      <h1>JSX</h1>
      {/* <button onClick={apple()}>click me</button> //call atonce */}
      <button onClick={apple}>click me</button> 

      <button onClick={()=>apple()}>click me</button>

      <button onClick={()=>alert("ajay verma")}>click me</button>
    </div>
  );
}

export default App;
