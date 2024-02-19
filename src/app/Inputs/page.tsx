'use client';
import React, { useState } from 'react';
//interface ParamType{
  //param: string | number;} 
export default function Inputs() {

  const [res, setRes] = useState('');
  const [operator, setOperator] = useState('');
  const [val, setVal] = useState('');

  const handlClick = (n: string) => {
    if (operator !=='') {
      if(n==='%'){
        setVal((parseFloat(val)/100).toString());
      }
      setVal((prevVal) => prevVal + n);
    } else {
        if(n==='%'){
          setRes((parseFloat(res)/100).toString());
        }
        else{
          setRes((prevRes) => prevRes + n);
        }
        
    }
  };
  const handleEqual = () => {
    if ( res.length!==0 && val.length!==0) {
      switch (operator) {
      case '+':
        setRes((parseFloat(res) + parseFloat(val)).toString());
        break;
      case '-':
        setRes((parseFloat(res) - parseFloat(val)).toString());
        break;
      case '*':
        setRes((parseFloat(res) * parseFloat(val)).toString());
        break;
      case '/':
        if (parseFloat(val) === 0) return alert("you can't  Divide by Zero!");
        setRes((parseFloat(res) / parseFloat(val)).toString());
          break;
      default:
        alert("enter numbers first to calculate them!")
        break; 
    }}else{
      alert("you should select a number first!")
    }
    setOperator('');
    setVal('');
  };
  const handelDel=()=>{
    setRes('');
    setOperator('');
    setVal('');
  };
  let n:number=1;
  const handelOneDel=(n:number)=>{
    if (val.length !==0  && n!==0) {
      setVal(val.substring(0,val.length-1));
      n--;}
      if(operator  && n!==0 ){
        setOperator('')
        n--;
      }
    if (res.length !==0  && n!==0) {
        setRes(res.substring(0,res.length-1));
        n--;
    }
   }
  const handelSqrt=()=>{
    if((!isNaN(parseInt(res)) ||!isNaN(parseInt(val))) && (parseInt(res)>0 || parseInt(val)>0)){
      if(operator )
        setVal((Math.sqrt(parseInt(val))).toString());
      else
        setRes((Math.sqrt(parseInt(res))).toString());}
    else{
      alert("you can't  take square root of a negative number ");
    }
  };
 
  const handlFloat = () => {
    if (!res.includes('.') && !operator) {
      setRes((prevRes) => prevRes + '.');
    }else if(!val.includes('.') && operator !== ''){
      setVal((prevVal) => prevVal + '.');
    }else {
      alert("Only one decimal point is allowed!");
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Calculator</h1>
        <b><p style={{color:"black", }}>{res} {operator} {val}</p></b>
        <div className="btn">
          {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
            <button key={num} onClick={() => handlClick(num.toString())}>{num}</button>))}
          <button onClick={() => handlFloat()}><b>.</b></button>
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('/')}>/</button>
          <button onClick={() => handlClick('%')}>%</button>
          <button onClick={() =>handelSqrt()}>√</button>
          <button onClick={handleEqual}>=</button>   
          <button onClick={handelDel} >del</button>
          <button onClick={()=>handelOneDel(n)} >X</button>
        </div>
      </div>
    </div>
  );
}
