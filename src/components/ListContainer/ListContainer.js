import React from "react";
import './ListContainer.css'
import ListItem from "../ListItem/ListItem";
import { v4 as uuidv4 } from 'uuid';

class ListContainer extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      itemArray : [],
      filteredArray: [],
      mode : 'all',
      userInput : "",
      clearButtonIsDisplayed : false,
      allButtonIsDisplayed : false,
    }
    
      this.pushInArray = this.pushInArray.bind(this);
      this.renderItem = this.renderItem.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.checkTask = this.checkTask.bind(this);
      this.sortArray = this.sortArray.bind(this);
      this.clearCheckedTasks = this.clearCheckedTasks.bind(this);
      this.displayFilterButtons = this.displayFilterButtons.bind(this);
      this.handleUserInputChange = this.handleUserInputChange.bind(this);
      this.countItems = this.countItems.bind(this);
      this.toggleCheckedMode = this.toggleCheckedMode.bind(this);
      this.toggleAllMode = this.toggleAllMode.bind(this);
      this.toggleUncheckedMode = this.toggleUncheckedMode.bind(this);
      this.filterCheckedTasks = this.filterCheckedTasks.bind(this);
    }
    
    //regroupe les éléments en mettant les tâches cochées à la fin
  sortArray(itemArray){
    return itemArray.sort((a, b) => a.isChecked < b.isChecked ? -1 : 1);
  }
  
  //ajoute un élément défini par l'user dans la liste.
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
  
  //supprime toutes les tâches déjà cochées.
  clearCheckedTasks(){
    console.log("cleared")
    let workingArray = this.state.itemArray
    let filteredArray = workingArray.filter(item => !item.isChecked )
    this.setState({itemArray:filteredArray})
    
    if(filteredArray.every(element => !element.isChecked)){
      this.setState(
        {clearButtonIsDisplayed: false}
      )
    }
  }
  
  // coche une task et la décoche si elle est déjà cochée.
  checkTask(currentId){
    let workingArray = this.state.itemArray;
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
      
      // supprime une tâche
  removeTask(elementId){
        let itemArray = this.state.itemArray
        let workingArray = itemArray.filter(element => {
          return element.id !== elementId;
        });
        
        this.setState({itemArray : workingArray})
        
        if(this.state.itemArray.length === 1){
          this.setState({
            clearButtonIsDisplayed:false
          })
        }
      }
      
      // return un compsant ListItem (élement de la liste)
  renderItem(e){
        return (
          <ListItem key= {e.id} id ={e.id} label ={e.label} isChecked= {e.isChecked} checkTask = {this.checkTask} removeTask ={this.removeTask} />
          )
        }
        
        // gère le changement de valeur de l'input
  handleUserInputChange(e) {
          this.setState({ userInput: e.target.value});
        }
        
        // si nécessaire, affiche les boutons de filtre 
  displayFilterButtons (){
          if (this.state.clearButtonIsDisplayed){
            return (
              <div>
          <button className = "clear" onClick = {this.clearCheckedTasks}> Clear all checked task</button>
          <button className = "clear" onClick = {this.toggleCheckedMode}> Completed Tasks</button>
          <button className = "clear" onClick = {this.toggleUncheckedMode}> Upcoming Tasks</button>
        </div>
      );
    }
        if(this.state.allButtonIsDisplayed){
          return <button className = "clear" onClick = {this.toggleAllMode}> All Tasks</button>
        }
  }
    
  toggleCheckedMode(){
    console.log('checked')
    console.log(this.state.mode);
    this.setState({
      mode : 'checked',
      allButtonIsDisplayed:true,
    });
    this.displayFilterButtons();
  }
    
  toggleUncheckedMode(){
    console.log('unchecked')
    console.log(this.state.mode);
    this.setState({
      mode : 'unchecked',
      allButtonIsDisplayed:true,
    })
    console.log(this.state.mode);
    
    this.displayFilterButtons();
  
  }
    
  toggleAllMode(){
    console.log('all')
    this.setState({
      mode : 'all',
      allButtonIsDisplayed:false,
  })
  this.displayFilterButtons();
  }

  countItems(){
    return (
      <div>
        <p id="taskCounter">Nombre de tâches à effectuer : {this.state.itemArray.length}</p>
      </div>
      )
  }
    
  filterCheckedTasks(){
    let allModeArray = this.state.itemArray;
    
    if (this.state.mode ==='checked'){
      let checkedArray = allModeArray.map(item =>{
        if(item.isChecked){
          return item;
        }else{
          return null;
        }
      });
      
      this.setState({filteredArray : checkedArray})
      
    }else if (this.state.mode ==='unchecked'){
      let uncheckedArray = allModeArray.map(item =>{
        if(item.isChecked){
          return item;
        }else{
          return null;
        }
      });
      this.setState({filteredArray : uncheckedArray});
  }else if(this.state.mode === 'all'){
    this.setState({filteredArray : []})
  }
  }

  render(){
    return (
      <div className='list-container'>
        
        <form className = "item-input">
            <input type="text" id="text-input" name="text-input" placeholder='Add a new task' value={this.state.userInput} onChange={this.handleUserInputChange}/>
            <input type='submit' className="add-task" onClick={this.pushInArray}/>
        </form>
        {this.displayFilterButtons()}
        {
          this.state.itemArray
          .filter(e => e !== null)
          .map(e => {
              return this.renderItem(e)
            })
        }
        {this.countItems()}
      </div>
      )
  }
}
  
export default ListContainer;