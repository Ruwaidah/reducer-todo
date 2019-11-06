import { stat } from "fs"
import { className } from "postcss-selector-parser"

// const [state, dispatch] = useReducer(reducer, initialState);
export const initial  = {
    item: '',
    completed: false,
    id: Date.now()
  }



export const reducer = (state, action) => {
    console.log("test")

    switch(action.type) {

        case 'ONCLEAR' :
            console.log(state)
            return state.filter(item => item.completed === false)

        case 'ADDTODO' :
            let newtodo = action.payload
            if (newtodo.item == '')
                return state
            return ([...state,{ ...newtodo}])
             
        case 'ONTOGGLE' :
            console.log(action.payload)
             state.map((item) => {
                if (item.id === action.payload) 
                return  item.completed = !(item.completed)
            })

        default :
            return state
    }
}