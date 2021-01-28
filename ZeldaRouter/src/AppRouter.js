import React from 'react';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import Index from './Pages/Index'
import Skills from './Pages/Skills'
import Workhistory from './Pages/Workhistory'
import './index.css'

function AppRouter(){
  return(
    <Router>
    <div className='mainDiv'>
      <div className='leftNav'>
       <h3>Zelda Yuan</h3>
        <ul>
         <li>  <Link to='/'>Home</Link> </li>
         <li>  <Link to='/skills'>Skills</Link> </li>
         <li>  <Link to='/workhistory'>Workhistory</Link> </li>
        </ul>
       </div>
       <div className='rightMain'>
      <Route path='/' exact component={Index} />
      <Route path='/skills/' component={Skills} />
      <Route path='/workhistory/' component={Workhistory} />

      </div>
    </div>
    </Router>
  )
}

export default AppRouter
