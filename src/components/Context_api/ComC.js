import React,{useContext} from 'react'
import { AppState } from '../ContextApi'

const ComC = () => {
  const appstate=useContext(AppState);
  return (
    <div className='compc'>
         <div>ComC</div>
         <h1>{appstate.data}</h1>
         <h1>{appstate.detail.name}</h1>
         <h1>{appstate.detail.age}</h1>
    </div>
  )
}

export default ComC;