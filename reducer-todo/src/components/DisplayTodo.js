import React, { useEffect,useState } from 'react'



export default function DisplayTodo(props) {
    

    const [item, setItem] = useState(props.todoList)
    console.log(item)

    return <div onClick = {() => setItem({...item, completed: !(item.completed)})}
                className = {`item ${item.completed}` }
               >
                <p>{props.todoList.item}</p>
           </div>


            }