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

    render(){
        return (
            <div className = "list-items">
                <input type="checkbox" id={String(this.props.userInput)} name="item" />
                <label> {this.props.userInput}</label>
                <button className='delete-item'> X </button>
              </div>
        )
    }
}

export default ListItem;