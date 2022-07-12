import React from "react";
import ListItem from "../ListItem/ListItem";

class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = { 
        ItemArray : [ <ListItem />, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>]
      }
    }
    render(){
        return (

            <div className='list-container'>
               <div>
                  <div className = "item-input">
                      <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
                      <button className="add-task">Add Task</button>
                  </div>
                </div>

            <fieldset>
                          
              {this.state.ItemArray}
             
            </fieldset>
        </div>
        )
    }
}

export default ListContainer;