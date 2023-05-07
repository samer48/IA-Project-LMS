import React, {useState} from 'react'

import {useNavigate } from 'react-router-dom'

import Validation from './cource_validation';

import axios from 'axios'

function Addcources() {
    const [values, setValues] = useState({        
      name: '',        
      code: '',        
      statuss: ''
     })  
      const navigate = useNavigate();
          const [errors, setErrors] = useState({})  
      const handleInput = (event) => { 
        
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    }   
      const handleSubmit = (event) => {
                event.preventDefault();
                        const err = Validation(values); setErrors(err);
                                 if(err.name === "" && err.code === "" && err.statuss==="") {            
        axios.post('http://localhost:8081/addcources', values)
                    .then(res => {
                          navigate('/admin');
                                        }) 
                                       .catch(err => console.log(err));        }    }
  return (    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
         <div className='bg-white p-3 rounded w-25'> 
                    <h2>cources</h2>  
              <form action="" onSubmit={handleSubmit}>    
                   <div className='mb-3'>            
              <label htmlFor="name"><strong>name</strong></label>  
                    <input type="text" placeholder='Enter name' name='name'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.name && <span className='text-danger'> {errors.name}</span>}  
                </div>              
                <div className='mb-3'>            
              <label htmlFor="code"><strong>code</strong></label>  
                    <input type="text" placeholder='Enter code' name='code'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.code && <span className='text-danger'> {errors.code}</span>}  
                </div>  
                  <div className='mb-3'>       
                    <label htmlFor="statuss"><strong>statuss</strong></label>    
                    <input type="statuss" placeholder='Active/in active' name='statuss'   
             onChange={handleInput} className='form-control rounded-0'/>       
             {errors.statuss && <span className='text-danger'> {errors.statuss}</span>} 
  </div>             
  
    

          <button type='submit' className='btn btn-success w-100 rounded-0'> add course</button> 
                       
     
                    </form>        </div>    </div>  )}
export default Addcources