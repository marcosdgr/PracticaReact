import React from 'react'
import MainHome from '../Componentes/MainHome'
import Footer from '../Componentes/Footer'
import Contar from '../Componentes/Contar'
import Header from '../Componentes/Header'


const Home = () => {
  const persona = {
    nombre: "Marcos",
    apellido: "Gimenez",
    lenguajes: "html,css,js",
    datos: "demasiado sexy"
  }
  return (
    <div>
      <Header persona={persona}/>
      <MainHome/>
      <Contar/>
      <Footer/>

    </div>
  )
}

export default Home