import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);   
  const inputRef = useRef();                
  const idRef = useRef(1);                  


  const addTodo = () => {
    const text = inputRef.current.value;
    if (text === '') return;               

    const newTodo = {
      id: idRef.current,                   
      text: text,                          
      completed: false                    
    };

    setTodos([...todos, newTodo]);         
    idRef.current = idRef.current + 1;     
    inputRef.current.value = '';          
  };


  const toggleComplete = (id) => {
    const newList = todos.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    setTodos(newList);
  };


  const deleteTodo = (id) => {
    const newList = todos.filter((item) => item.id !== id);
    setTodos(newList);
  };

  return (
    <div>
      <h1>TODOLIST🎀</h1>
      <input ref={inputRef} />
      <button onClick={addTodo}>추가</button>

      <TodoList
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
