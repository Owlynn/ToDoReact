import React from "react";
import ListItem from "../ListItem/ListItem";

class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = { 
        itemArray : [],
      }

      this.getUserInput = this.getUserInput.bind(this);
      this.addTask = this.addTask.bind(this);
    }

    getUserInput(){
      let userInput = document.getElementById('text-input').value;
      console.log(userInput)
      return userInput;
    }

    addTask(){
      let userInput = this.getUserInput();
        this.setState({
      })
      this.state.itemArray.push(<ListItem userInput={userInput}/>)
    }

    render(){
        return (

            <div className='list-container'>
               <div>
                  <div className = "item-input">
                      <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
                      <button className="add-task" onClick={this.addTask}>Add Task</button>
                  </div>
                </div>

            <fieldset>
                          
             {this.state.itemArray}
             
            </fieldset>
        </div>
        )
    }
}

export default ListContainer;