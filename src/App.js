import React, { useState, useEffect } from 'react';


function App() {
  const [result, setResult]  = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const space = () => {
    setResult(result.slice(0, result.length - 1));
    console.log(result)
  }
  

const calculate = () => {
  setResult(eval(result).toString());
}

  return ( 
    
  <div className='cover'>
   
    <br />
    <br />
    <br />
    <br />
  
    
    <div className='upper'>
    
      <form className='upper'>
        <input type="text" value={result} className='top'/>
        </form> 
    
    </div>
    <br />
    <div className='keyPad'>
    
      <br />
      
        
        <div className='keys'> 
          <button name='7' onClick = {handleClick}>7</button>
          <button name='8' onClick = {handleClick}>8</button>
          <button name='9' onClick = {handleClick}>9</button>
          <button onClick = {space} id="backspace">Del</button>
        </div>
        <br />
        <div className='keys'> 
          <button name='4' onClick ={handleClick}>4</button>
          <button name='5' onClick = {handleClick}>5</button>
          <button name='6' onClick = {handleClick}>6</button>
          <button name='+' onClick = {handleClick}>+</button>
      </div>
      <br />
       <div className='keys'> 
          <button name='1' onClick = {handleClick}>1</button>
          <button name='2' onClick = {handleClick}>2</button>
          <button name='3' onClick = {handleClick}> 3</button>
          <button name='-' onClick = {handleClick}>-</button>
       </div>
        <br />
        <div className='keys'>     
          <button name='.' onClick = {handleClick}>.</button>
          <button name='0' onClick = {handleClick}>0</button>
          <button name='/' onClick = {handleClick}>/</button>
          <button name='*' onClick = {handleClick}>x</button>
        </div>
        <br />
        <div className='keys'> 
          <button className='vv' id='clear' onClick = {clear}>Reset</button>
          <button className='vv' id='result' onClick = {calculate}>=</button>
        </div>


    </div>
    
  </div>
)}

export default App;
