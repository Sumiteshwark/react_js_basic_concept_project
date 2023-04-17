import React from 'react';
import {memo,useState} from 'react';

const Todo = ({todos,addTodo}) => {
  console.log("Child render");
  const [state,setState]=useState(1);
  return (
    <div>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <button className='hook-btn' onClick={()=>addTodo(state,setState)}>Add Todo</button>
    </div>
  );
};

export default memo(Todo);