import React from "react";
import './ListContainer.css'
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from 'uuid';

//TODO
// filtrer les taches
// compter les tâches

class ListContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        itemArray : [],
        userInput : "",
        clearButtonIsDisplayed : false
      }
      
      this.pushInArray = this.pushInArray.bind(this);
      this.renderItem = this.renderItem.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.checkTask = this.checkTask.bind(this);
      this.sortArray = this.sortArray.bind(this);
      this.clearCheckedTasks = this.clearCheckedTasks.bind(this);
      this.displayClearButton = this.displayClearButton.bind(this);
      this.handleUserInputChange = this.handleUserInputChange.bind(this);
      this.countItems = this.countItems.bind(this);
    }
    
    sortArray(itemArray){
      return itemArray.sort((a, b) => a.isChecked < b.isChecked ? -1 : 1);
    }
    
    pushInArray(event){
      if (!this.state.userInput){
        event.preventDefault()
        return alert('the input field is empty')
      }

      let workingArray = this.state.itemArray;
      workingArray.push({
        id : uuidv4(),
        isChecked : false,
        label : this.state.userInput
      })
      
      this.setState({ itemArray: workingArray })
      event.preventDefault()
      this.setState({userInput:''})

    }
    
    clearCheckedTasks(){
      let workingArray = this.state.itemArray
      let filteredArray = workingArray.filter(item => !item.isChecked )
      this.setState({itemArray:filteredArray})
      
      if(filteredArray.every(element => !element.isChecked)){
        this.setState(
          {clearButtonIsDisplayed: false}
        )
      }
    }
    
    checkTask(currentId){
      let workingArray = this.state.itemArray
      workingArray.forEach( element => {
          if(element.id === currentId) {
            element.isChecked = !element.isChecked;
          }
       }) 
       
      if (this.state.itemArray.some(element => element.isChecked)) {
       this.setState({
         clearButtonIsDisplayed : true})
      }else{
         this.setState({
           clearButtonIsDisplayed : false})
      };

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
      
      if(this.state.itemArray.length === 1){
        console.log('égal 1')
        this.setState({
          clearButtonIsDisplayed:false
        })
      }
    }
    
    renderItem(e){
      return (
        <ListItem key= {e.id} id ={e.id} label ={e.label} isChecked= {e.isChecked} checkTask = {this.checkTask} removeTask ={this.removeTask} />
      )
    }
    
    handleUserInputChange(e) {
      this.setState({ userInput: e.target.value});
    }
    
    displayClearButton (){
      if (this.state.clearButtonIsDisplayed){
        return <button className = "clear" onClick = {this.clearCheckedTasks}>Clear all checked task</button>
      }
    }
    
    countItems(){
      console.log("length " + this.state.itemArray.length)
        return (
        <div>
          <p className="taskCounter">Nombre de tâches à effectuer : {this.state.itemArray.length}</p>
       </div>
       )
        }

    render(){
      return (
        <div className='list-container'>
          
                  <form className = "item-input">
                      <input type="text" id="text-input" name="text-input" placeholder='Add a new task' value={this.state.userInput} onChange={this.handleUserInputChange}/>
                      <input type='submit' className="add-task" onClick={this.pushInArray}/>
                  </form>

          {this.displayClearButton()}
          {this.state.itemArray.map(
              (e) => {
                return this.renderItem(e)
              })
          }
          
          {this.countItems()}
        </div>
      )
    }
  }
  
export default ListContainer;