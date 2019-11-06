import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import DisplayTodo from './components/DisplayTodo'
import { initial, reducer } from './reducers/reducer'



function App() {
  const [state, dispatch] = useReducer(reducer, [{
    item: '',
    completed: false,
    id: Date.now()
  }] );
console.log(state)
// const [newdata, setnewdata] = useState([])

// useEffect(() => {
//   setnewdata(state)
// },[state])


  return (
      <div className="App">
        <TodoForm onChange = {dispatch} onSubmit = {dispatch} onClear = {dispatch} />

        {state.map(item => <DisplayTodo key = {item.id} 
                                        ontoggle = {dispatch} 
                                        todoList=  {item} 
                                        /> )}
        
        
        {/* <button>Clear</button> */}
      </div>
  );
}

export default App;
