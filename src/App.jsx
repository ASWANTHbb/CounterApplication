import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeRange, decrement, increment, reset } from './Redux/CounterSlice';
import { useState } from 'react';
function App() {
  const [range,setRange]=useState("")
  const count = useSelector((state)=>state.counter.value) 
  console.log(count);
  console.log(range);
  
  
const dispatch  = useDispatch()


  return (
    <>
        <div style={{width:'100%',height:'100vh',backgroundColor:'black'}} className='d-flex justify-content-center align-items-center'>
          <div className='bg-light p-5 rounded' style={{width:'500px'}}>
            <h1 className='text-primary text-center'>CounterAppilication</h1>
            <h1 className='text-center my-5' style={{fontSize:'70px'}}>{count}</h1>
            <div className='d-flex justify-content-evenly'>
              <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
              <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>

            </div>
            <div className='d-flex mt-5'>
              <input type="text"  className='form-control' placeholder='Range' onChange={(e)=>setRange(e.target.value)} />
              <button className='btn-primary ms-3 'onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
            </div>
          </div>

        </div>
    </>
  )
}

export default App
