import uuid from 'uuid'
import {ADD_TODO, DELETE_TODO, EDIT_TODO} from '../actions/types'

const theTodo =[
    {
        id : uuid(),
        task : "Watch Vinland",
    },

    {
        id : uuid(),
        task : "Watch Black Clover",
    },

    {
        id: uuid(),
        task : "Study Smthing",
    },

]
const TodoReducer = (state = theTodo, action) => {
            switch (action.type) {
                case ADD_TODO:
                return( 
                    state.concat(action.addNew)
                    )
                case DELETE_TODO:
                    return(
                        state.filter(el => el.id !== action.id)
                    )
                case EDIT_TODO:
                    return(
                        state.map(el => el.id === action.todoToEdit.id ? action.todoToEdit : el)

                    )










          default :
             return state  
             }
           
          }
          
            
  
 
export default TodoReducer;



// https://www.codingame.com/playgrounds/9169/simple-redux-create-delete-contact-application