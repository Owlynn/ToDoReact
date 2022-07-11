import React from "react";
import ListItem from "../ListItem/ListItem";
import ItemInput from "../ItemInput/ItemInput";


class ListContainer extends React.Component{
    constructor(props){
      super(props);

      this.state = { 
        itemList : [ <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>, <ListItem/>]
      }
    }
    render(){
        return (

            <div className='list-container'>
              <ItemInput/>

            <fieldset>
                          
              {this.state.itemList}
             
            </fieldset>
        </div>
        )
    }
}

export default ListContainer;