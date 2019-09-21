import {ADD_TODO, DELETE_TODO, EDIT_TODO} from './types'
import uuid from 'uuid'
 


export const addTodo =({ task }) => dispatch => {
    return(
        dispatch({
            type: ADD_TODO,
            addNew : {id: uuid(), task}
        })
    )
} 
export const deleteTodo = id => dispatch =>{
    return( 
        dispatch({ 
            type: DELETE_TODO,
            id
        })
        
    )
}
export const editTodo = todoToEdit => dispatch =>{
    return(
        dispatch({
            type: EDIT_TODO,
            todoToEdit
        })

    )
}