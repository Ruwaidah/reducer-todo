import React, { useState } from 'react'
import {initial } from '../reducers/reducer'


export default function TodoForm(props) {
    const [newtext, setNewText] = useState({
        item: '',
        completed: false,
        id: Date.now()
    })

    const onChangeme = (event) => {
        setNewText({
            item: event.target.value,
            completed: false,
            id: Date.now()
        })
    }
    return (
        <form>
            <input placeholder = "add new todo" 
                value = {newtext.item}
                onChange = {onChangeme}
                />


            <button onClick={(event) =>{
                    event.preventDefault();
                    props.onSubmit({ type: 'ADDTODO', payload: newtext })
                    newtext.item = ''
                    }
             }>
                 Add</button>

            <button onClick = {(event) => {
                event.preventDefault();
                props.onClear({type: 'ONCLEAR'})
            }}>
                Clear</button>

        </form>
    )
}