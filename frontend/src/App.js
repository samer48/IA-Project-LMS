import React from 'react'

import Login from './login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './signup'

import Admin from './admin'

import Home from './home'

import Signuup from './signuup'

import Loogin from './loogin'

import Signup2 from './signup2'

import Login2 from './login2'

import Students from './students'

import Add_ins from './add_ins'

import Addcources from './addcources'

import List_cources from './list_cources'

import List_cources2 from './list_cources2'

import Reg_course from './reg_course'

import List_enrolled from './list_enrolled'

import Listgrads from './listgrads'

import Intstructor from './intstructor'

import List_inst from './list_inst'

import Update from './update'

import Update_ins from './update_ins'

import Gradsup from './gradsup'

import Assignup from './assignup'





function App() {  return (  
      <BrowserRouter>        
          <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Signuup' element={<Signuup />}></Route>
          <Route path='/Loogin' element={<Loogin />}></Route>
           <Route path='/Signup' element={<Signup />}></Route>
             <Route path='/Login' element={<Login />}></Route>
             <Route path='/Login2' element={<Login2 />}></Route>
             <Route path='/Signup2' element={<Signup2 />}></Route>
             <Route path='/Students' element={<Students />}></Route>
             <Route path='/Admin' element={<Admin />}></Route>
             <Route path='/Intstructor' element={<Intstructor />}></Route>
             <Route path='/Addcources' element={<Addcources />}></Route>
             <Route path='/Add_ins' element={<Add_ins />}></Route>
             <Route path='/List_cources' element={<List_cources />}></Route>
             <Route path='/List_cources2' element={<List_cources2 />}></Route>
             <Route path='/Reg_course' element={<Reg_course />}></Route>
             <Route path='/list_enrolled' element={<List_enrolled />}></Route>
             <Route path='/listgrads' element={<Listgrads />}></Route>
             <Route path='/list_inst' element={<List_inst />}></Route>
             <Route path="/update/:id" element={<Update />} />
             <Route path="/update_ins/:id" element={<Update_ins />} />
             <Route path="/gradsup/:id" element={<Gradsup />} />
             <Route path="/assignup/:id" element={<Assignup />} />

             
             
            
                    </Routes>   
                     </BrowserRouter> 
                     

                                          
                     
                     
                     
                     )}
                     
export default App
