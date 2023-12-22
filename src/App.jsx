import { useState } from 'react'
import { IndexPages } from './pages/indexPages/IndexPages'
import { CoasterDetails } from './pages/coasterDetails/CoasterDetails'
import { CoastersPages } from './pages/coastersPages/CoastersPages'
import {Routes, Route} from 'react-router-dom'
import { Nosotros } from './pages/nosotros/Nosotros'
// https://monta-as-rusas-api-dev-zbbq.4.us-1.fl0.io
// axios.defaults.baseURL = 'http://localhost:6002/api'

function App() {


  return (
    <div className=' '>
      
      <Routes>
        <Route path='/' element={<IndexPages/>}/>
        <Route path='/galeria' element={<CoastersPages/>}/>
        <Route path='/detalles/:coaster_id' element={<CoasterDetails/>}/> 
        <Route path='/nosotros' element={<Nosotros/>}/> 
        
      </Routes>
    </div>
  )
}

export default App
