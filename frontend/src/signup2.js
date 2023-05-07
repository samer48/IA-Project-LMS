import React, {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Validation from './Validationsignup';

import axios from 'axios'

function Signup2() {
    const [values, setValues] = useState({        
      statuss: '',        
      email: '',        
      password: '',
      phone: '',
      type:''
     })  
      const navigate = useNavigate();
          const [errors, setErrors] = useState({})  
      const handleInput = (event) => { 
        
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))    }   
      const handleSubmit = (event) => {
                event.preventDefault();
                        const err = Validation(values); setErrors(err);
                                 if(err.statuss === "" && err.email === "" && err.password === "" && err.phone===""&& err.type==="") {            
        axios.post('http://localhost:8081/signup2', values)
                    .then(res => {
                          navigate('/');
                                        }) 
                                       .catch(err => console.log(err));        }    }
  return (    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
         <div className='bg-white p-3 rounded w-25'> 
                    <h2>Sign-Up</h2>  
              <form action="" onSubmit={handleSubmit}>    
                   <div className='mb-3'>            
              <label htmlFor="statuss"><strong>status</strong></label>  
                    <input type="text" placeholder='Active/in active' name='statuss'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.statuss && <span className='text-danger'> {errors.statuss}</span>}  
                </div>              
                <div className='mb-3'>            
              <label htmlFor="type"><strong>type</strong></label>  
                    <input type="text" placeholder='admin/instructor/student' name='type'  
                                      onChange={handleInput} className='form-control rounded-0'/>
  {errors.type && <span className='text-danger'> {errors.type}</span>}  
                </div>  
                  <div className='mb-3'>       
                    <label htmlFor="email"><strong>Email</strong></label>    
                    <input type="email" placeholder='Enter Email' name='email'   
             onChange={handleInput} className='form-control rounded-0'/>       
             {errors.email && <span className='text-danger'> {errors.email}</span>} 
  </div>             
  
     <div className='mb-3'> 
              <label htmlFor="password"><strong>Password</strong></label>
                                  <input type="password" placeholder='Enter Password' name='password'
                       onChange={handleInput} className='form-control rounded-0'/>
             {errors.password && <span className='text-danger'> {errors.password}</span>}
                    </div>   

                    <div className='mb-3'>       
                    <label htmlFor="phone"><strong>phone</strong></label>    
                    <input type="phone" placeholder='Enter phone' name='phone'   
             onChange={handleInput} className='form-control rounded-0'/>       
             {errors.phone && <span className='text-danger'> {errors.phone}</span>} 
  </div>  
          <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up</button> 
                         <p>You are agree to aour terms and policies</p> 
        <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                    </form>        </div>    </div>  )}
export default Signup2