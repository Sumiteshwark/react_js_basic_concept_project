import React, { useState, useEffect, useRef } from "react";

const Useref = () => {
  const [input, setInput] = useState("");
  // const [counter, setCounter]=useState(0);
  // const counter = useRef(0);
  const prevstate=useRef("");

  useEffect(() => {
    // setCounter(counter+1);
    // counter.current = counter.current + 1;  
    prevstate.current=input;
  },[input]);

  const formHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input className="ref_form" value={input} onChange={formHandler} />
      {/* <h3>Total times reder is {counter.current} times.</h3>   */}
      <h3>Previous state was {prevstate.current}</h3>
    </div>
  );
};

export default Useref;

