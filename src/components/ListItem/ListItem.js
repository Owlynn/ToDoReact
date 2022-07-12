import React from "react";

// un composant, par défaut, peut prendre des props.
// pour qu'il en ait, il faut lui envoyer
// un composant reçoit des props du composant qui le render 

// commencer par le composant enfant de tous les autres (le plus petit)
// en faire un composant statique et avec données en dur
// puis alimtenter la donnée par les props (par le parent)
// remonter de composant en composant par les props
// trouver le niveau (dans l'arborescence) auquel est stocké la donnée

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.target = this.target.bind(this);
    }

    target(event){
        event.target.parentNode.remove()
    }
    render(){
        return (
            <div className = "list-items" id={String(this.props.userInput)} key={String(this.props.userInput)}>
                <input type="checkbox" name="item" />
                <label> {this.props.userInput}</label>
                <button className='delete-item' id={`delete-${String(this.props.userInput)}`} onClick = {this.target} >X</button>
            </div>
        )
    }
}

export default ListItem;