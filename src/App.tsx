import React from 'react';
import {Provider} from 'react-redux';
import store from './components/store';

import './App.css';
import Todo from './components/Todo';


function App() {
  return (

    <Provider store={store}>
      <div className="container">
        <Todo />
      </div>
    </Provider>

  );
}

export default App;
