// Same as useState, but we don't have need to make new function eact time.

import React,{useReducer} from 'react'

const reducer=(state,action)=>{
    if(action.type==="INC"){
        return state+2;
    }
    else if(action.type==="DEC"){
        return state-1;
    }
    else if(action.type==="MUL"){
        return state*2;
    }
    else{
        return state;
    }
}

const Usereducer = () => {

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
        <h1 className='hook-val' style={{fontSize: "80px"}}>{state}</h1>
        <button className='hook-btn' onClick={()=>dispatch({type: "INC"})}>Increment</button>
        <button className='hook-btn' onClick={()=>dispatch({type: "DEC"})}>Decrement</button>
        <button className='hook-btn' onClick={()=>dispatch({type: "MUL"})}>Multiply</button>
    </div>
  )
}

export default Usereducer