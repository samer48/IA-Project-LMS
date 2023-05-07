import React from 'react'

import "./students.css";

import { Link } from 'react-router-dom'


function Students() {  return (    <div className='students  vh-100'>

<div className='students-items'>

<Link to="/list_cources2" className='btn btn-default border w-100 rounded-0 text-decoration-none'>show cources</Link>

<Link to="/reg_course" className='btn btn-default border w-100 rounded-0 text-decoration-none'>register to courses</Link>

<Link to="/listgrads" className='btn btn-default border w-100 rounded-0 text-decoration-none'>show grads</Link>

<Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>logout</Link>

</div>

</div>  )}
export default Students