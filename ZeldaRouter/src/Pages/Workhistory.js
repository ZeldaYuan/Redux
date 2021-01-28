import React from 'react';
import {Route, Link} from 'react-router-dom';
import Work1 from './workhistory/Work1'
import Work2 from './workhistory/Work2'
import Work3 from './workhistory/Work3'
import Work4 from './workhistory/Work4'
import Work5 from './workhistory/Work5'
import Work6 from './workhistory/Work6'

function Workhistory(){
  return(
    <div>
      <div className='topNav'>
        <ul>
          <li> <Link to='/workhistory/Work1'>1991-1998</Link></li>
          <li> <Link to='/workhistory/Work2'>1998-1999</Link></li>
          <li> <Link to='/workhistory/Work3'>2000-2001</Link></li>
          <li> <Link to='/workhistory/Work4'>2005-2005</Link></li>
          <li> <Link to='/workhistory/Work5'>2006-2011</Link></li>
          <li> <Link to='/workhistory/Work6'>2014-2016</Link></li>
        </ul>
      </div>
      <div className='skillsContent'>
        <div><h2>My Work History</h2></div>
        <Route path='/workhistory/work1/' component={Work1}/>
        <Route path='/workhistory/work2/' component={Work2}/>
        <Route path='/workhistory/work3/' component={Work3}/>
        <Route path='/workhistory/work4/' component={Work4}/>
        <Route path='/workhistory/work5/' component={Work5}/>
        <Route path='/workhistory/work6/' component={Work6}/>
      </div>
    </div>
  )
}
export default Workhistory
