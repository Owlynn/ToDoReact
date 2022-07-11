import React from "react";
import ListItem from "../ListItem/ListItem";
import ItemInput from "../ItemInput/ItemInput";


class ListContainer extends React.Component{
    render(){
        return (

            <div className='list-container'>
              <ItemInput/>
           

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