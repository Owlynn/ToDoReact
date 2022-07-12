import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import ListContainer from './ListContainer/ListContainer'

class App extends React.Component{

  // constructor(props){
  //   super(props);
  // }

  render(){
    return ( 
      <div className='flex-container'>
          <h1>To-Do-List</h1>
          <ListContainer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
