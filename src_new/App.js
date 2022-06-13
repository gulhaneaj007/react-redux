// import User from "./User";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setdata] = useState(
    {"name": "ajinkya", "age": 27}
     
  );
  return (
    <div className="App">
      <h1>state with object</h1>
      <input type="text" placeholder="Enter name" value={data.name} 
      onChange={(e)=>{setdata({...data,name:e.target.value} )}}/>

      <input type="text" placeholder="Enter age" value={data.age} 
      onChange={(e)=>{setdata({...data,age:e.target.value})}} />
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </div>
  );
}

export default App;
 