import React,{useState, createContext} from 'react';
import ComA from './Context_api/ComA';

const AppState=createContext();
const NewState=createContext();

const ContextApi = () => {
  const [data,setData]=useState("Hey bruh!");
  const [detail,setDetail]=useState({name: "Sumit", age: 26});
  const [ndetail,setNdetail]=useState({nname: "Atul", nage: 22});
  return (
    <div className='contextapi'>
        <AppState.Provider value={{data,detail}}>
        <NewState.Provider value={ndetail}>
            <ComA />
        </NewState.Provider>
        </AppState.Provider>
    </div>
  )
}

export default ContextApi;
export {AppState,NewState};