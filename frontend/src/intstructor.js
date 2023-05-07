import React from 'react'

import { Link } from 'react-router-dom'


function Intstructor() {  return (    <div>

<Link to="/list_enrolled" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>view Enrolled student </Link>

<Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>logout</Link>

</div>  )}
export default Intstructor