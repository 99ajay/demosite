import React from "react";

class Student extends React.Component{
    constructor(){
        super();
      
    }
    
    render(){
       // console.log(this.props);
        
        return(
            <div style={{backgroundColor:"blue"}}>
                <h1>My name is {this.props.name} </h1>
                <h2>My email is: {this.props.email} </h2>
            </div>

        );
    }
}
export default Student;