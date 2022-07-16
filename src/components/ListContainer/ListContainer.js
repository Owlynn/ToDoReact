import React from "react";
import './ListContainer.css'
import ListItem from "../ListItem/ListItem";

class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = { 
        itemArray : [],
        isChecked : false,
      }

      this.getUserInput = this.getUserInput.bind(this);
      this.addTask = this.addTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.checkTask = this.checkTask.bind(this);
    }

    getUserInput(){
      let userInput = document.getElementById('text-input').value;
      // console.log(userInput)
      return userInput;
    }

    
    addTask(){
      let userInput = this.getUserInput();
      if (!userInput){
        return alert('the input field is empty')
      }
      this.state.itemArray.push(<ListItem key={userInput} userInput={userInput} removeTask={this.removeTask} onChange={this.checkTask} isChecked={this.state.isChecked}/>)
      // console.log(this.state.itemArray)
      this.setState({})
      document.getElementById('text-input').value = " ";
    }
    
    removeTask(event){
      let buttonkey = event.target.getAttribute('buttonkey');
      let array = this.state.itemArray
      let newArray = array.filter(element => {
        console.log('index element ' + array.indexOf(element))
        return element.key !== buttonkey
      })

      this.setState({
        itemArray: newArray
      })
    }

    checkTask(){
      this.setState({
        isChecked:true
      })
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