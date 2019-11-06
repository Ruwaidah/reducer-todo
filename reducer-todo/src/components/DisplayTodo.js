import React, { useEffect,useState } from 'react'



export default function DisplayTodo(props) {
    console.log(props.todoList.completed)
    return <div onClick = {() =>
                props.ontoggle({
                type: 'ONTOGGLE', 
                payload: props.todoList.id
                } )}
                className = {`item ${props.todoList.completed}` }
               >
                <p>{props.todoList.item}</p>
           </div>


            }