 import React, { useEffect, useState } from 'react'
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
 
 function App() {
  let {students,setStudent}=useState({});
  let [findStudent,setFindStudent]=useState('');
  let fetchAllStudent=async()=>{
    try{
      let res=await fetch('/getApi',{
        method:"GET",
        credentials:'include',

      })
      let student=await res.json();
      if(student.success){
              setStudent(student);
console.log('data fetch successfully');

      }
      else{
        throw Error('data not come')
      }
    }
    catch(e){
      console.log('data not come',e.message);
    }
  }

  useEffect(()=>{
fetchAllStudent();
  },[])
   return (
   <div>
    <Outlet/>
    </div>
   )
 }
 
 export default App
 