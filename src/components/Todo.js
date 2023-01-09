import React, {Component} from 'react';
import { useState } from 'react';


class Todo extends Component {
    
    
    state = {
        todos: ['Zadanie 1', 'Zadanie 2', 'zadanie 3'],
        value: ''
    };
    addItem = (item) => {
        this.state.todos.push(item);
        this.setState({todos: this.state.todos, value: ''})
     }
     handleChange = (event) => {
        this.setState({value: event.target.value})
     }
     
     removeItem = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({todos: this.state.todos})
     }
     
     

   render() {
       return (
           <div className="container">
               <div className="input-group input-group-sm mb-3">
                   <span className="input-group-text" id="inputGroup-sizing-sm">Add</span>
                   <input value={this.state.value} type="text" className="form-control" aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm" onChange={this.handleChange}/>
                   <button  type="button"
                           className="btn btn-primary" onClick={() => this.addItem(this.state.value)}>Add
                   </button>
               </div>


               <ul className="list-group">
                        {this.state.todos.map((item, index) => {
                            return (
                                <li key={index} className="list-group-item">{item}
                                    <button type="button"
                                            className="btn btn-danger" onClick={() => this.removeItem(index)}>Remove
                                    </button>
                                </li>
                            )
                        })}
                </ul>

           </div>
       );
   }
}
export default Todo;
