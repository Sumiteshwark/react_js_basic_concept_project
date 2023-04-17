import React, {useState} from 'react';
const Usestate = () => {
  const [val,setValue]=useState(1);
  function inc(){
        setValue(val+1);
  }
  function dec(){
        setValue(val-1);
  }
  function ince(n){
        setValue(val+n);
  }
  function decb(n){
        setValue(val-n);
  }
  return (
    <div className='hook-head'>
        <h1 className='hook-val' style={{fontSize: "80px"}}>{val}</h1>
        <button className='hook-btn' onClick={inc}>increment</button>
        <button className='hook-btn' onClick={dec}>decrement</button>
        <button className='hook-btn' onClick={()=>ince(2)}>inc_by_2</button>
        <button className='hook-btn' onClick={()=>decb(3)}>dec_by_3</button>
    </div>
  )
}

export default Usestate