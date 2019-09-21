import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteTodo, editTodo} from '../actions/actions'
import {Button} from 'react-bootstrap';



class Items extends Component {
    state = { disabled: true, task:this.props.todos.task}



    editTodo = () => {
        if(!this.state.disabled){
            this.props.editTodo({...this.state, task: this.state.task})
            this.setState({ disabled: !this.state.disabled });
        }else{
            this.setState({ disabled: !this.state.disabled });
        }
    }
    render() { 
     const {todos, deleteTodo}=this.props
        return (  
        <div>
         <input type="text" value={todos.task}/>
         <Button variant="dark" onClick={()=>deleteTodo (todos.id)}> Delete </Button>
         <Button variant="secondary"  onClick={this.editTodo}  > Edit </Button>
        </div> 

        );
    }
}
 
export default connect ( null, {deleteTodo, editTodo})(Items) ;