import React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Search from './Pages/Search';
import Collection from './Pages/Collection'
import Delete from './Pages/Delete';

function App(){


    const pathname = window.location.pathname;

  return(
    /*<Route path="/" exact component={Index} />
      <Route path="/favorites/" component={Favorites} />／这个版本没有Routes包裹不行 */

    <Router>

    <div id='app'>
    <header> Pixabay Picture Search</header>
    <nav>
     <Link to='/'
      className={ pathname === '/' ? 'active' : '' }
     >Search
     </Link>
     <Link to='/collection'
      className={ pathname === '/collection' ? 'active' : '' }
     >Collection
     </Link>
     </nav>
    <Routes>
    <Route path='/' exact element={<Search/>}  />
    <Route path='/collection' element={<Collection
      />}/>
    <Route path='/delete' element={<Delete/>}  />

    </Routes>
    </div>
  </Router>
  )
  }

export default App
