import React from 'react'

import "./admin.css";

import { Link } from 'react-router-dom'


function Admin() {  return (    <div className='admin bg-primary vh-100'>

<div className='admin-items'> 

<Link to="/add_ins" className='btn btn-default border w-100 rounded-0 text-decoration-none'>add instructor</Link>

<Link to="/addcources" className='btn btn-default border w-100 rounded-0 text-decoration-none'>add courses</Link>

<Link to="/list_cources" className='btn btn-default border w-100 rounded-0 text-decoration-none'>list courses</Link>

<Link to="/list_inst" className='btn btn-default border w-100 rounded-0 text-decoration-none'>list instructor</Link>

<Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>logout</Link>


</div>

</div>  )}
export default Admin