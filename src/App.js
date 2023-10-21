import React from 'react';
import Todos from './components/Todos';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
    <div className="App">
      <h1>To do Application</h1>
      <Todos />
      <DisplayTodo />
    </div>
  );
}

export default App;
