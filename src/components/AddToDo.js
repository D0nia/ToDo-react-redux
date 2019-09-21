import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Input} from 'reactstrap'
import { Button, Row, Col} from 'react-bootstrap';
import {addTodo} from '../actions/actions'


 export class Add extends Component { 
   handelchange=(e)=>{
     this.setState({task:e.target.value})
   }
   addNewTodo = () =>{
        this.props.addTodo(this.state)

      } 
    render() {
     
        return (  
         <div className="add-todo">
          <Row>
            <Col xs={10}> 
             <Input type="text" placeholder="Add your list" onChange={this.handelchange}
               />
           </Col>
           <Col>  
            <Button variant="warning" onClick={this.addNewTodo} > + </Button>
           </Col>
         </Row>
        </div> 
    );
    }
}
 
export default connect (null,{addTodo})(Add)