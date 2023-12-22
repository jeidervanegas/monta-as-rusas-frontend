
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const CoasterDetails = () => {

  const {coaster_id} = useParams()
  const [coaster, setCoaster] = useState({})

  const loadCoasterDetails = () => {
    fetch(`https://monta-as-rusas-api-dev-zbbq.4.us-1.fl0.io/api/details/${coaster_id}`)
      .then(response => response.json())
    .then(coaster => setCoaster(coaster))
  }

  loadCoasterDetails()

  return (
    <main className='text-white'>
        <header className=' py-3 bg-gray-600 '>
          <div className='w-4/5 m-auto flex flex-col items-center lg:flex-row  md:justify-between '>
            <h1 className='  lowercase text-2xl text-orange-400'>...<span className='font-bold uppercase font-style: italic'>rusas</span></h1> 
            <div className='flex flex-col md:flex-row items-center gap-4 uppercase my-2 lg:my-0'>
              <Link to="/">inicio</Link>
              <Link to="/galeria">Montañas</Link>
              <Link to="/nosotros">Nosotros</Link>
            </div>
          </div>
        </header>
        <h1 className='mt-5  text-center mb-5 uppercase text-xl md:text-2xl text-gray-700 font-bold'>estos son los datos de la montaña rusa  {coaster.title}</h1>
        <div className='h-1 bg-orange-600  m-auto w-4/5'></div>

        <article className='md:flex md:gap-10 w-4/5 m-auto text-gray-700 mt-10'>
          <img className='w-full h-96 object-cover md:w-2/4 rounded-lg shadow-md' src={coaster.imageUrl}/>
          <div className='leading-8 w-2/4 py-4 '>
            <h3 className='text-orange-600 font-bold uppercase'>espesificaciones</h3>
            <p>{coaster.description}</p>
            <ul>
              <li className='font-bold'>Longitud: <span className='font-normal'>{coaster.length}</span></li>
              <li className='font-bold'>Inversiones: <span className='font-normal'>{coaster.inversions}</span> </li>
            </ul>
          </div>
        </article>
        <footer className='py-3 bg-gray-600 relative md:absolute w-full bottom-0 left-0 mt-6 '>
          <p className='text-center'> © 2022 todos los derechos reservados</p>
        </footer>
    </main>
  )
}
