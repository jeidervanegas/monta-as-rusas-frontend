import { Link } from 'react-router-dom'

import React from 'react'

export const IndexPages = () => {
  return (

    <main className='fondo'>
      <div className='fondo__sombra'>
      <header className=' py-3 bg-gray-700 border-b border-gray-500'>
          <div className='w-4/5 m-auto flex flex-col items-center lg:flex-row  md:justify-between '>
            <h1 className='  lowercase text-2xl text-orange-400'>...<span className='font-bold uppercase font-style: italic'>rusas</span></h1> 
            <div className='flex flex-col md:flex-row items-center gap-4 uppercase my-2 lg:my-0 '>
              <Link className='hover:text-orange-400 transition-all seleccionada' to="/">inicio</Link>
              <Link className='hover:text-orange-400' to="/galeria">Montañas</Link>
              <Link className='hover:text-orange-400' to="/nosotros">Nosotros</Link>
            </div>
          </div>
        </header>

              <h2 className='text-center py-8 text-2xl md:text-3xl w-4/5 m-auto '>Bienvenido a Montañas Rusas extrémas</h2> 

          <div className='w-4/5 m-auto text-center flex flex-col gap-8'>
              
              <div className='h-1 bg-orange-600 w-full m-auto'></div>
 

              <div className='grid text-left mt-10  py-10 px-6 rounded-lg card mb-20'>
                <img src="/src/img/nosotros.svg" alt="imagen sobre nosotros" />
                <div>
                  <h3 className='text-center text-2xl mb-4 text-orange-400 font-bold'>Conoce nuestra forma de trabajar</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est laborum magnam ipsa officiis tempora nisi facilis dolorum, esse eveniet, voluptatibus assumenda accusamus nam laboriosam quidem odio culpa, optio fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse sunt maxime quae libero tempore et illum, possimus placeat sequi molestiae quidem vitae eum dolores quod quam. Perspiciatis, magnam non.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est laborum magnam ipsa officiis tempora nisi facilis dolorum, esse eveniet, voluptatibus assumenda accusamus nam laboriosam quidem odio culpa, optio fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, esse sunt maxime quae libero tempore et illum, possimus placeat sequi molestiae quidem vitae eum dolores quod quam. Perspiciatis, magnam non.</p>
                  <div className='mt-4 flex justify-center'>
                     <Link className='bg-orange-600  mt-4 py-3 px-6 rounded-lg' to='/galeria'>Ver Galería</Link>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <footer className='py-3 bg-gray-600'>
          <p className='text-center'> © 2022 todos los derechos reservados</p>
        </footer>
    </main>
    
    
  )
}
