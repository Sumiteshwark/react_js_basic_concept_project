import React, { useContext } from 'react'
import ComC from './ComC';
import { AppState } from '../ContextApi'
import { NewState } from '../ContextApi';

const ComB = () => {
  const appstate=useContext(AppState);
  const newstate=useContext(NewState);
  return (
    <div className='compb'>
         <div>ComB</div>
         <h3>{appstate.data}</h3>
         <h3>{newstate.nname}</h3>
         <h3>{newstate.nage}</h3>
         <ComC />
    </div>
  )
}

export default ComB