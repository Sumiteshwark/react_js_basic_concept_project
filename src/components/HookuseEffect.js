import React,{useState, useEffect} from 'react'

function HookuseEffect(){
  
  const [state, setState]=useState(3);
  const [data, setData]=useState();

  useEffect(()=>{
    async function getData(){
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
        const res=await get.json();
        setData(res);
    }
    getData();
    document.title=`(${state}) Emp onlin`;
  },[state]);

  return (
    <div>
        <button className='useeffect_btn' onClick={()=>setState(state+2)}>click me ({state})</button>
        {/* {
            data.map((element,index)=>{
                return(
                    <div className='useeffect_data' key={index}>
                        <h4>{element.firstName}</h4>
                        <h4>{element.lastName}</h4>
                        <h4>{element.email}</h4>
                    </div>
                );
            })
        } */}
    </div>
  );
}

export default HookuseEffect;