import React from 'react';
import {connect} from 'react-redux';
import Items from './Todoitems'


const List = ({list}) => {
    return (
        <div className="todo-list">
          { list.map((el,index)=> <Items key={index} todos={el} id={index}/> )}
        </div>
    )
	}

 const mapStateToProps = state => {
    return{
        list: state.TodoReducer

    }
 }
 
export default connect(mapStateToProps)(List);