import React from "react";
import ListItem from "../ListItem/ListItem";


class ListContainer extends React.Component{
    render(){
        return (

            <div className='list-container'>

            <div className = "item-input">
              <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
              <input type="submit" value="Add Task"></input>
            </div>

            <fieldset>
              
             <ListItem/>
             <ListItem/>
             <ListItem/>
             <ListItem/>
             <ListItem/>
             
          </fieldset>
        </div>
        )
    }
}

export default ListContainer;