import React from 'react';

import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {addTodo, order, State} from "../store/todoReducer";

import {Container, Content, Row, Column, Title, Button, Ul, Error} from '../../styles';
import "./styles.css";
import {FcPlus} from "react-icons/fc";
import {RiArrowUpDownLine} from "react-icons/ri"
import {Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

interface IProps{
    state:State,
    add:(dispatch:{})=>void,
    reorder:(dispatch:{})=>void,
}

interface inputTodo{
  inputTodo?:string
  initalValues:{
    inputTodo:string
  }
}


const Todo = ({add, reorder, state}:IProps):JSX.Element => { 

  const data = state.data; 
  
  const handleSubmit = ({todo}:{todo:string}) =>{
    
    add(todo);  
    return true;
  }

  const validations = yup.object({
    todo: yup.string().required().min(5)
  });

  
  return(
    <Container>  
      <Content width="400px" height="600px">
        <Column>
          <Title size={26}>Todo List</Title>
          
          <Row>
            <Formik initialValues={{todo:""}} 
              validationSchema={validations}
              onSubmit={async (values, { resetForm }) => {
                await handleSubmit(values);
                resetForm();
              }}>
              
                <Form>
                  <Row>
                    <Column>
                      <Field autoFocus placeholder="Insert a Todo" name="todo" className="inputField"/>
                      <ErrorMessage component={Error} name="todo"/>
                    </Column>
                    <Button type="submit"><FcPlus size={44} /></Button>
                  </Row>
                </Form>
              
            </Formik>
            <Button onClick={reorder}><RiArrowUpDownLine size={44} /></Button>
          </Row>
          <Ul maxHeight={400}>
            {data.map((todo,index)=>
            <li key={index}>{todo}</li>
            )}
          </Ul>
        </Column>
      </Content>  
    </Container>
  );
}

const mapStateToProps = (state:State) =>({
    state
});

const mapDispatchToProps = (dispatch:Dispatch) =>({
    add: (todo:any) => dispatch(addTodo(todo)),
    reorder:() => dispatch(order())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);