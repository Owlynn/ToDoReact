import React from "react"


class ItemInput extends React.Component{
    render(){
        return (
            <div className = "item-input">
                <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
                <input type="submit" value="Add Task"></input>
            </div>
        )
    }
}



export default ItemInput;