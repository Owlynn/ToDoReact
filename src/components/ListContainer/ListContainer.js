import React from "react";
import './ListContainer.css'
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from 'uuid';

class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        itemArray : [],
        userInput : "",
      }

      this.pushInArray = this.pushInArray.bind(this);
      this.renderItem = this.renderItem.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.checkTask = this.checkTask.bind(this);
      this.sortArray = this.sortArray.bind(this);
      this.handleUserInputChange = this.handleUserInputChange.bind(this);
    }

    sortArray(itemArray){
      return itemArray.sort((a, b) => a.isChecked < b.isChecked ? -1 : 1);
    }

    pushInArray(){
      if (!this.state.userInput){
        return alert('the input field is empty')
      }
      let workingArray = this.state.itemArray;
        workingArray.push({
        id : uuidv4(),
        isChecked : false,
        label : this.state.userInput
      })

      this.setState({ itemArray: workingArray })
      document.getElementById('text-input').value = "";
    }


    checkTask(currentId){
      let workingArray = this.state.itemArray
      workingArray.forEach( element => {
        if(element.id === currentId) {
          element.isChecked = !element.isChecked;
        }
      })

      this.setState({
        itemArray : this.sortArray(workingArray)
      })
    }

    removeTask(buttonid){
      let itemArray = this.state.itemArray
      let workingArray = itemArray.filter(element => {
        return element.id !== buttonid;
      });

      this.setState({itemArray : workingArray})
    }

    renderItem(e){
        return <ListItem key= {e.id} id ={e.id} label ={e.label} isChecked= {e.isChecked} checkTask = {this.checkTask} removeTask ={this.removeTask} />
    }

    handleUserInputChange(e) {
      this.setState({ userInput: e.target.value });
    }

    render(){
        return (
            <div className='list-container'>
               <div>
                  <div className = "item-input">
                      <input type="text" id="text-input" name="text-input" placeholder='Add a new task' value={this.state.userInput} onChange={this.handleUserInputChange}/>
                      <button className="add-task" onClick={this.pushInArray}>Add Task</button>
                  </div>
                </div>

            <fieldset>

            {
              this.state.itemArray.map(
                (e) => {
                  return this.renderItem(e)
                }
              )
            }

            </fieldset>
        </div>
        )
    }
}

export default ListContainer;