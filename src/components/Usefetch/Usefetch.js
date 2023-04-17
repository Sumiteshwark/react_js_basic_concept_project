// Same as useEffect to fetch data from api, but useFetch make a component,so that it can be called anywhere easily.

import Usefetch_comp from './Usefetch_comp';

const Usefetch = () => {
  const [data] = Usefetch_comp("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
  return (
    <div>
        {
            data.map((ele,index)=>{
                return <h1 key={index}>{ele.firstName}</h1>
            })
        }
    </div>
  )
}

export default Usefetch;