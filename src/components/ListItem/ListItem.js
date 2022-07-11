import React from "react";

class ListItem extends React.Component {
    render(){
        return (
            <div className = "list-items">
                <input type="checkbox" id="item" name="item" />
                <label>Item</label>
                <button className='delete-item'> X </button>
              </div>
        )
    }
}

export default ListItem;