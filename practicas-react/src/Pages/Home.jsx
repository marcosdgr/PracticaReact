import React from 'react'
import MainHome from '../Componentes/MainHome'
import Footer from '../Componentes/Footer'
import Contar from '../Componentes/Contar'

const Home = () => {
  const persona = {
    nombre: "Marcos",
    apellido: "Gimenez",
    lenguajes: "html,css,js",
    datos: "demasiado sexy"
  }
  return (
    <div>
      <Contar/>
      <MainHome/>
      <Footer/>

    </div>
  )
}

export default Home