// It is used to memorize a function.

import React,{useState,useCallback} from 'react';
import Todo from './Todo';

const Usecallback = () => {

  const[count,setCount]=useState(0);
  const[todos,setTodos]=useState([]);

  const increment = () => {
    setCount((c)=>c+1);
  };

  const addTodo=useCallback((num,set)=>{
    setTodos((t)=>[...t, `New todo ${num}`]);
    set(num+1);
    // By using useCallback this function is called only when Add todo is called.
  },[]);

  return (
    <>
        <div>
            Count: {count}
            <button style={{fontSize:"50px",padding:"0px 4px"}} className='hook-btn' onClick={increment}>+</button>
        </div>
        <br />
        <Todo todos={todos} addTodo={addTodo} />
    </>
  )
}

export default Usecallback;