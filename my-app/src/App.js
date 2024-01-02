import logo from './logo.svg';
import './App.css';
import './components/Component.css'
// import About from './About'
import react,{useState} from "react"


function App() {
  

  const[data,setData]=useState({
    fname:"",
    lname:"",
    age:"",
    email:"",
    phno:"",
    gender:""
  })

 const submitData=(event)=>{
   event.preventDefault()
  setData({...data,[event.target.name]:event.target.value})
  console.log(data)
 

 }
    
  return (
    <div className='divStyle'>
    <div>
    <form>
       <div>
     <label className='lab'>
      First Name
    </label>
      </div>
    <div>
      <input
     type="text"
     name="fname"
     value={data.fname}
     onChange={submitData}/>
     </div>
    <div>
       <div>
      <label className='lab'>
      Last Name
    </label>
    </div>
     <input
     type="text"
     name="lname"
     value={data.lname}
     onChange={submitData}/>
     </div>
      <div>
     <label className='lab'>age</label>
    </div>
    <div>
    <input
     type="number"
     name="age"
     value={data.age}
     onChange={submitData}/>
     </div>
      <div>
     <label className='lab'>email</label>
    </div>
    <div>
    <input
     type="email"
     name="email"
     value={data.email}
     onChange={submitData}/>
     </div>
      <div>
     <label className='lab'>ph.No</label>
    </div>
    <div>
    <input
     type="tel"
     name="phno"
     value={data.phno}
     onChange={submitData}/>
      </div>
      <div>
      <label className='lab'>
      Gender
    </label>
    </div>
     <div>
     <input
     type="text"
     name="gender"
     value={data.gender}
     onChange={submitData}/>
  </div>
   </form>
    </div>
    <div>
     <button type='submit' onClick={submitData} className='btn'>submit</button>
    </div>
   
    
    </div>
  

  );    
}

export default App;
