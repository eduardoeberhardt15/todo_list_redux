import React from 'react';

import { Title, Input } from '../../styles';

const Todo: React.FC = () => {

  return(
    <>
        <Title>Todo List</Title>
        <Input placeholder="Insert a Todo"/>
    </>
  );
}

export default Todo;