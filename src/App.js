import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [result,setResult]=useState("");
  const clickHAndler=(e)=>{
    setResult(result.concat(e.target.value))
    // console.log(clickHAndler)

  }
  const clearResult=()=>{
    setResult("")
  }
  const calculate=()=>{
  //  let e = eval;
  //  setResult(eval(result))
    try{
      setResult(eval(result).toString());
    }catch(error){
      setResult("")

    }
  }
  const backSpace=()=>{
    setResult(result.slice(0,-1))
  }

  console.log(result)
  return( <div>
<div className="calc">

  <input type="text" placeholder='0' id="answer" value={result}/>
  <input type="button" value="9" className='button' onClick={clickHAndler}/>
  <input type="button" value="8" className='button'onClick={clickHAndler} />
  <input type="button" value="7" className='button' onClick={clickHAndler} />
  <input type="button" value="6" className='button' onClick={clickHAndler} />
  <input type="button" value="5" className='button' onClick={clickHAndler}/>
  <input type="button" value="4" className='button' onClick={clickHAndler} />
  <input type="button" value="3" className='button' onClick={clickHAndler} />
  <input type="button" value="2" className='button'onClick={clickHAndler} />
  <input type="button" value="1" className='button' onClick={clickHAndler} />
  <input type="button" value="0" className='button' onClick={clickHAndler} />
  <input type="button" value="." className='button'onClick={clickHAndler} />
  <input type="button" value="+" className='button' onClick={clickHAndler} />
  <input type="button" value="-" className='button' onClick={clickHAndler} />
  <input type="button" value="*" className='button' onClick={clickHAndler} />
  <input type="button" value="/" className='button' onClick={clickHAndler} />
  <input type="button" value="%" className='button' onClick={clickHAndler} />
  <input type="button" value="Clear" className='button button1' onClick={clearResult} />
  <input type="button" value="="  className="button button1" onClick={calculate}/>
  <input type="button" value="C" className='button button1' onClick={backSpace} />


</div>


  </div>);
}
