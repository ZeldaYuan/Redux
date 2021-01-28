import React from 'react';
import {Route, Link} from 'react-router-dom';
import Hardware from './skills/Hardware'
import Software from './skills/Software'
import Others from './skills/Others'

function Skills(){
  return(
    <div>
      <div className='topNav'>
        <ul>
          <li> <Link to='/skills/Hardware'>Hardware</Link></li>
          <li> <Link to='/skills/Software'>Software</Link></li>
          <li> <Link to='/skills/Others'>Others</Link></li>

        </ul>
      </div>
      <div className='skillsContent'>
        <div><h2>My hardware software and other skills</h2></div>
        <Route path='/skills/hardware/' component={Hardware}/>
        <Route path='/skills/software/' component={Software}/>
        <Route path='/skills/others/' component={Others}/>
      </div>
    </div>
  )
}
export default Skills
