import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CoastersPages = () => {
  const [coasters, setCoasters] = useState([])

  const loadCoasters = () => {
    fetch('https://monta-as-rusas-api-dev-zbbq.4.us-1.fl0.io/api/coasters')
      .then((res) => res.json())
      .then((allCoasters) => setCoasters(allCoasters))
  }

  loadCoasters()
  return (
    <main className="olas ">
      <div className="fondo__sombra">
        <header className=" py-3 bg-gray-700 border-b border-gray-500 ">
          <div className="w-4/5 m-auto flex flex-col items-center lg:flex-row  md:justify-between ">
            <h1 className="  lowercase text-2xl text-orange-400">
              ...
              <span className="font-bold uppercase font-style: italic">
                rusas
              </span>
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 uppercase my-2 lg:my-0 ">
              <Link className="hover:text-orange-400 transition-all" to="/">
                inicio
              </Link>
              <Link
                className="hover:text-orange-400 seleccionada"
                to="/galeria"
              >
                Montañas
              </Link>
              <Link className="hover:text-orange-400" to="/nosotros">
                Nosotros
              </Link>
            </div>
          </div>
        </header>
        <h2 className="text-center py-8 text-2xl md:text-3xl w-4/5 m-auto">
          Estas son las mejores montañas rusas del mundo
        </h2>
        <div className="h-1 bg-orange-600  m-auto w-4/5"></div>
        {/* <hr className='' /> */}
        <div className="w-4/5 m-auto flex flex-wrap md:gap-0 lg:gap-8 ">
          {coasters.map((eachCoaster) => {
            return (
              <Link
                className="w-full  mt-10 mb-4 md:w-2/5 lg:w-1/4 h-72 m-auto"
                to={`/detalles/${eachCoaster._id}`}
              >
                <article className="md:hover:scale-110 transition-all   hover:text-gray-800 rounded-3xl bg-gray-400 card3 p-1">
                  <div className="w-full ">
                    <img
                      className="w-full h-52 object-cover  rounded-t-3xl"
                      src={eachCoaster.imageUrl}
                    />
                  </div>
                  <div className=" p-4 mt-2 card2 hover:shadow-lg rounded-b-3xl">
                    <h3 className="text-center font-bold  ">
                      {eachCoaster.title}
                    </h3>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
        <div className="flex justify-center">
          <div className="my-16 py-3 px-4 rounded-md  bg-gray-600 inline-block">
            <Link className="" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
        <footer className="py-3 bg-gray-600">
          <p className="text-center"> © 2022 todos los derechos reservados</p>
        </footer>
      </div>
    </main>
  )
}
