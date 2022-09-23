import React, { useState } from "react";
import { GlobalStyle } from "./Global/style.js";


export default function App() {
  const [ input, setInput] = useState()
  const [ metaList, setMetaList] = useState([])
  const Add= ()=>{
    setMetaList([...metaList, input])
    setInput('')

    if (input !== ''){ setMetaList([...metaList, itensInput]);
        setInput('');}

    function ApagarMeta(itemTracker){ 
      const MetaFilter = metalist.filter(item =>item.id !== itemTracker); 
      setMetaList(MetaFilter);
    }
 
  }
  return(
    <>
      <form onSubmit={(e) => { e.preventDefault(); } }>
        <input value={input} onChange={(e) => { setInput(e.target.value); } } />
        <button onClick={() => { Add(); } }>Add</button>
        <p>{metaList.map(item => (<li>{item}</li>))}</p>
        <button onClick={() => { ApagarMeta(item.id);}>Ok</button>
      </form>
      <GlobalStyle />
    </>
    
  );
}