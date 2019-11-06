import React, { useEffect,useState } from 'react'



export default function DisplayTodo(props) {
    // console.log(props.toggle)

    const [item, setItem] = useState(false)
    console.log(item)


    const toggle = () => {
        props.toggle({type: 'ONTOGGLE', payload: props.todoList.id})
        setItem(!(item))

    }
    if (props.index == 0)
        return null


    return <div onClick = {toggle}
                className = {`item ${item}` }
               >
                <h1>{props.index} - {props.todoList.item}</h1>
           </div>
            }