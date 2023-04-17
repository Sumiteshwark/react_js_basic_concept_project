// It is used to memorize a value.
import React, { useMemo, useState } from "react";

const Usememo = () => {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState("");

  const expensivecall = (num) => {
    console.log(num);
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  useMemo(() => {
    expensivecall(data1)
    // This will call only if we press button and not when we fill input.
    },[data1]
  );

  return (
    <div>
      <button className="hook-btn"  onClick={() => setData1(data1 + 1)}>memo</button>
      <h2>Data1: {data1}</h2>
      <input className="ref_form" onChange={(event) => setData2(event.target.value)}></input>
      <h2>Data2: {data2}</h2>
    </div>
  );
};

export default Usememo;
