import React from 'react'
import MainHome from '../Componentes/MainHome'
import Footer from '../Componentes/Footer'
import Header from '../Componentes/Header'
import Marcos from "../assets/marcos.jpeg";




const Home = () => {

  const misDatos = {
    nombre: "Marcos",
    apellido: "Gimenez",
    edad: 30,
    imagen: Marcos,
    lenguajes: ["js","c#","java"],
 

  }
  
  return (
    <div>
      <Header/>
      <MainHome misDatos={misDatos}/>
      <Footer/>

    </div>
  )
}

export default Home