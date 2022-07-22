import React from "react";
import './ListContainer.css'
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from 'uuid'; 

class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = { 
        itemArray : [],
        isChecked : false,
      }

      this.getUserInput = this.getUserInput.bind(this);
      this.pushInArray = this.pushInArray.bind(this);
      this.renderItem = this.renderItem.bind(this);
      // this.removeTask = this.removeTask.bind(this);
      this.checkTask = this.checkTask.bind(this);
      this.sortArray = this.sortArray.bind(this);
    }

    getUserInput(){
      let userInput = document.getElementById('text-input').value;
      // console.log(userInput)
      return userInput;
    }

    sortArray(itemArray){
      return itemArray.sort((a, b) => a.isChecked < b.isChecked ? -1 : 1);
    }
    
    pushInArray(){
      let userInput = this.getUserInput();
      if (!userInput){
        return alert('the input field is empty')
      }
      let workingArray = this.state.itemArray;
        workingArray.push({
        id : uuidv4(),
        isChecked : false,
        label : userInput
      })

      // console.log('log du itemarray ' + this.state.itemArray)
      this.setState({ itemArray: workingArray })
      document.getElementById('text-input').value = "";
    }

    
    checkTask(currentId){
      let workingArray = this.state.itemArray
      workingArray.forEach( element => {
        if(element.id === currentId) {
          element.isChecked = !element.isChecked;
        }
        console.log('coucou')
      }
      
      
      )
      this.setState({
        itemArray : this.sortArray(workingArray)
      })
    }
    
    renderItem(e){
        // console.log(e + ' ' +index + ' ' + e.label)
        return <ListItem key= {e.id} id ={e.id} label ={e.label} isChecked= {e.isChecked} checkTask = {this.checkTask} />
    }
    render(){
        return (
            <div className='list-container'>
               <div>
                  <div className = "item-input">
                      <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
                      <button className="add-task" onClick={this.pushInArray}>Add Task</button>
                  </div>
                </div>

            <fieldset>
                          
            {
              this.state.itemArray.map(
                (e,index) => {
                  // console.log (e + ' ' + index)
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