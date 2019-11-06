import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import DisplayTodo from './components/DisplayTodo'
import { initial, reducer } from './reducers/reducer'



function App() {
  const [toggleclas, settoggleclas] = useState(false)
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

// const toggle = (todo) => {
//   state.map((item) => {
//     if (item.id === todo) {
//       return item.completed = !(item.completed)
//       settoggleclas(!(item.completed))
//     }
// })
// }

// state.map((item) => {
//           if (item.id === action.payload) 
//           return  item.completed = !(item.completed)
//       })

  return (
      <div className="App">
        <TodoForm onChange = {dispatch} onSubmit = {dispatch} onClear = {dispatch} />
        <div className = "allitem">
          {state.map((item,index )=> 
          <DisplayTodo key = {item.id} 
                    // ontoggle = {toggle} 
                    todoList=  {item} 
                    toggle = {dispatch} 
                    index = {index}
          /> )}
        </div>
        {/* <button>Clear</button> */}
      </div>
  );
}

export default App;
