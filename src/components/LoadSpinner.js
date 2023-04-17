import React, { useEffect, useState } from 'react';
import {ColorRing} from 'react-loader-spinner';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoadSpinner() {
  const [loading,setLoading]=useState(false);
  const [data, setData]=useState([]);

  useEffect(()=>{
    setLoading(true);
    async function getData(){
      const get=await fetch("https://hub.dummyapis.com/employee?noofRecords=500&idStarts=1001");
      const res=await get.json();
      setData(res);
      setLoading(false);
      toast.success("Successfully fetched.");
    }
    getData();
  },[])

  return (
    <div className="App">
      <ToastContainer />
      <div className="loader-spinner">
        {
          loading?
          <ColorRing />:
          data.map((element,index)=>{
              return(
                  <h3 key={index}>{element.firstName}</h3>
              );
          })
        }
      </div>
    </div>
  );
}

export default LoadSpinner;