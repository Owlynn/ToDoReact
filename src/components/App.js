import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import ListContainer from './ListContainer/ListContainer'

class App extends React.Component{
  render(){
    return ( 
      <div className='flex-container'>
          <h1>To-Do-List</h1>
          <ListContainer/>
          
            {/* <div className='list-container'>

                <div className = "item-input">
                  <input type="text" id="text-input" name="text-input" placeholder='Add a new task'/>
                  <input type="submit" value="Add Task"></input>
                </div>

                <fieldset>
                  
                  <div className = "list-items">
                    <input type="checkbox" id="item" name="item" />
                    <label>Item</label>
                    <button className='delete-item'> X </button>
                  </div>
                  
                 
                 
              </fieldset>
            </div> */}
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
