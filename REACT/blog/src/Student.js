import { useState } from "react";

function Student(props){
  

    return(
        <div style={{backgroundColor : "blue",margin : 10}}>
            <h1>Hello {props.name}</h1>
            
        </div>
    );
}

export default Student;