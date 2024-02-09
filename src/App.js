
import React from 'react'

import Navbar from './components.js/Navbar'
import News from './components.js/News'
import { Route, Routes } from 'react-router-dom'
// import Pagination from './components.js/Pagination'

function App() {
   // let category='health';
   return (
      <>
         <Navbar />
         <Routes>
            {/* <Pagination /> */}
            <Route path='/' element={<News key="general" newsname='general' />}></Route>
            <Route path='/entertainment' element={<News key="entertainment" newsname='entertainment' />}></Route>
            <Route path='/sports' element={<News key="sports" newsname='sports' />}></Route>
            <Route path='/health' element={<News key="health" newsname='health' />}></Route>
            <Route path='/business' element={<News key="business" newsname='business' />}></Route>
            <Route path='/technology' element={<News key="technology" newsname='technology' />}></Route>
            <Route path='/' element={<News key="science" newsname='science' />}></Route>

         </Routes>

      </>
   )
}

export default App
