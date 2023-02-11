import React,{useState} from 'react'
import "./App.css";
const App = () => {

	const [num1,setNum1]=useState();
	const [num2,setNum2]=useState();
	const [ans,setAns]=useState(0);
	const [msg,setMsg]=useState("");
	const [error, setError] = useState(false);
	const [color, setColor] = useState('#fff');

   const handleChange=(event)=>{
         const { name, value }=event.target;
		 if(name==="num1") setNum1(parseInt(value));
		 else if(name==="num2") setNum2(parseInt(value));
		 event.preventDefault();
         if (!value){
          setError(true);
        }	 
   }
    const handleAction=(action)=>{
           if(action==="+") {
			setAns(num1+num2)  
			setColor("green")
			setMsg("Success:Your result is shown above!")
			setError(false)
	        }
		   else if(action==="-") {
			setAns(num1-num2)
			setMsg("Success:Your result is shown above!")
			setError(false)
	        }
		   else if(action==="*") {
			setAns(num1*num2)
			setMsg("Success:Your result is shown above!")
			setError(false)
			}
		   else if(action==="/") {
			setAns(num1/num2);
			setMsg("Success:Your result is shown above!")
			setError(false)
		   }
	}
  return (
	<div className="main">
	  <h1>React Calculator</h1><br></br>
	  <input type="number" value={num1} name="num1" onChange={(event)=>handleChange(event)}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  <input type="number" value={num2} name="num2" onChange={(event)=>handleChange(event)}></input><br></br><br></br>
	  <div className='arith'>
	  <button className='btn' onClick={()=>{handleAction("+")}}>+</button>
	  <button className='btn' onClick={()=>{handleAction("-")}}>-</button>
	  <button className='btn' onClick={()=>{handleAction("*")}}>*</button>
	  <button className='btn' onClick={()=>{handleAction("/")}}>/</button>
	  <h3 style={{ color }}>Result= {ans} <br></br>{msg} </h3>
	  {error && <p>Error : Num1 and Num2 can not be empty</p>}
</div>
	</div>
  )
}

export default App;
