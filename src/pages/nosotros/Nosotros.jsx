import { Link } from "react-router-dom"


export const Nosotros = () => {
  return (
    <main>
        <header className=' py-3 bg-gray-700 '>
          <div className='w-4/5 m-auto flex flex-col items-center lg:flex-row  md:justify-between '>
            <h1 className='  lowercase text-2xl text-orange-400'>...<span className='font-bold uppercase font-style: italic'>rusas</span></h1> 
            <div className='flex flex-col md:flex-row items-center gap-4 uppercase my-2 lg:my-0'>
              <Link to="/">inicio</Link>
              <Link to="/galeria">Montañas</Link>
              <Link className="seleccionada" to="/nosotros">Nosotros</Link>
            </div>
          </div>
        </header>

        <div className=" w-4/5 m-auto">
          <main>
            <div className="flex gap-6 m-12 leading-8">
              <div>
                <h2>Nuestra visión</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum totam dolorem consequuntur enim, vel laboriosam facere aspernatur quam dolores eaque rerum molestiae modi, nostrum sint sapiente omnis, officia quod.</p>
              </div>
              <div>
                <h2>Nuestra Misión</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum totam dolorem consequuntur enim, vel laboriosam facere aspernatur quam dolores eaque rerum molestiae modi, nostrum sint sapiente omnis, officia quod.</p>
              </div>
              <div>
                <h2>Nuestras fuentes</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum totam dolorem consequuntur enim, vel laboriosam facere aspernatur quam dolores eaque rerum molestiae modi, nostrum sint sapiente omnis, officia quod.</p>
              </div>

            </div>
          </main>
          <div className="flex gap-4">
            <img className="w-6/12" src="/src/img/nosotros.svg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illum totam dolorem consequuntur enim, vel laboriosam facere aspernatur quam dolores eaque rerum molestiae modi, nostrum sint sapiente omnis, officia quod.</p>

          </div>
        </div>
        <footer className="py-3 bg-gray-600 ">
          <p className="text-center"> © 2022 todos los derechos reservados</p>
        </footer>
    </main>
  )
}
