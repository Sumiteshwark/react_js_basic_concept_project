import React, {useState} from 'react';

const Form = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const[data,setData]=useState([]);

    const addData=()=>{
        setData([...data ,{name,email}]);
        setName("");
        setEmail("");
    }

    const rmvData=(index)=>{
        let arr=data;
        arr.splice(index,1);
        setData([...arr]);
    }

    // function call(event){
    //     setEmail(event.target.value);
    // }

  return (
    <div className='form'>
        <div className='cform'>
            <form>
                <input value={name} onChange={(event)=>setName(event.target.value)} id='siz' className='box' type="text" placeholder='name' />
                <input value={email} onChange={(event)=>setEmail(event.target.value)} id='siz' className='box' type="mail" placeholder='email'/>
                {/* <input value={email} onChange={call} id='siz' className='box' type="mail" placeholder='email'/> */}
                {/* <input value={email} onChange={function(event){setEmail(event.target.value)}} id='siz' className='box' type="mail" placeholder='email'/> */}
            </form>
                <button className='but' onClick={addData}>add</button>
        </div>
        <div className='form-data'>
            <div className='form-data-val'>
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Remove</h4>
            </div>

            {
                data.map((element,index)=>{
                    return(
                        <div key={index} className='form-data-val'>
                            <h4>{element.name}</h4>
                            <h4>{element.email}</h4>
                            <button className='del-btn' onClick={()=>rmvData(index)}>DEL</button>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )








//     const [form,setForm]=useState({});
//     const[data,setData]=useState([]);

//     const addData=()=>{
//         setData([...data ,form]);
//         setForm(form);
//     }

//     const rmvData=(index)=>{
//         let arr=data;
//         arr.splice(index,1);
//         setData([...arr]);
//     }

//   return (
//     <>
//     <div className='cform'>
//         <form>
//             <input value={form.name} onChange={(event)=>setForm({...form,name: event.target.value})} id='siz' className='box' type="text" placeholder='name' />
//             <input value={form.email} onChange={(event)=>setForm({...form,email: event.target.value})} id='siz' className='box' type="mail" placeholder='email'/>
//         </form>
//             <button className='but' onClick={addData}>add</button>
//     </div>
//     <div className='form-data'>
//         <div className='form-data-val'>
//             <h4>Name</h4>
//             <h4>Email</h4>
//             <h4>Remove</h4>
//         </div>

//         {
//             data.map((element,index)=>{
//                 return(
//                     <div key={index} className='form-data-val'>
//                         <h4>{element.name}</h4>
//                         <h4>{element.email}</h4>
//                         <button onClick={()=>rmvData(index)}>Rmv</button>
//                     </div>
//                 )
//             })
//         }

//     </div>
//     </>
//   )


}

export default Form;