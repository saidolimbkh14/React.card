import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Pizza from './pages/Pizza'
import Card from './pages/Card'

const App = () => {
  return (
    <>
<Routes>
    
  <Route path='/' element={<Home/>}/>
  <Route path='/pizza/:id' element={<Pizza/>}/>
  <Route path='/card' element={<Card/>}/>

</Routes>
    </>
  )
}

export default App
