import React from 'react';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((item) => (
        <li key={item.id}>
          {item.completed ? '✅ ' : ''}
          {item.text}
          <button onClick={() => props.onToggle(item.id)}>완료</button>
          <button onClick={() => props.onDelete(item.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
