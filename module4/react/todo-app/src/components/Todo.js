import { Component } from "react";


class Todo extends Component{
    constructor(){
    super();
    this.state={tasks:["Node 1","Node 2","Node 3","Node 4"]
      }
    }
    render(){
        return(
            <div>
                <input type="text"></input>
                <button>Add task</button>
                <ul>
                    {this.state.tasks.map((ele)=>(
                        <li>
                            <p>{ele}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Todo;