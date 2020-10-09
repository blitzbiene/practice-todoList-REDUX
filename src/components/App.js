import React from 'react';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput';

class App extends React.Component{




    render()
    {
        return(
           <div className="ui container">
               <h1 style={{textAlign:'center'}}>ADD---TASK</h1>
               <TodoInput/>
               <h1 style={{textAlign:'center'}}>TODO---LIST</h1>
               <TodoList/>
            </div>
        );
    }
}

export default App;