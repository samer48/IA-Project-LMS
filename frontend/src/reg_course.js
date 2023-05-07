import React from "react";
import { useState } from "react";
import axios from "axios";
import Validation from "./student_courses_validation";
import {useNavigate } from 'react-router-dom'


const Reg_course = () => {

const [values, setValues] = useState({        
    name: '',        
    code: '',        
    course_name: ''
   })  
    const navigate = useNavigate();
        const [errors, setErrors] = useState({})  
    const handleInput = (event) => { 
      
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    }   
    const handleSubmit = (event) => {
              event.preventDefault();
                      const err = Validation(values); setErrors(err);
                               if(err.name === "" && err.code === "" && err.course_name==="") {            
      axios.post('http://localhost:8081/reg_course', values)
                  .then(res => {
                        navigate('/students');
                                      }) 
                                     .catch(err => console.log(err));        }    }
   return (      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
         <div className='bg-white p-3 rounded w-25'> 
                    <h2>register to cources</h2>  
              <form action="" onSubmit={handleSubmit}>    
                   <div className='mb-3'>            
              <label htmlFor="name"><strong>student name</strong></label>  
                    <input type="text" placeholder='Enter name' name='name'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.name && <span className='text-danger'> {errors.name}</span>}  
                </div>              
                <div className='mb-3'>            
              <label htmlFor="course_name"><strong>course_name</strong></label>  
                    <input type="text" placeholder='Enter course_name' name='course_name'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.course_name && <span className='text-danger'> {errors.course_name}</span>}  
                </div>  
                  <div className='mb-3'>       
                    <label htmlFor="code"><strong>code</strong></label>    
                    <input type="code" placeholder='Enter code' name='code'   
             onChange={handleInput} className='form-control rounded-0'/>       
             {errors.code && <span className='text-danger'> {errors.code}</span>} 
  </div>             
  
    

          <button type='submit' className='btn btn-success w-100 rounded-0'> submit</button> 
                       
     
                    </form>        </div>    </div>

)};

export default Reg_course;