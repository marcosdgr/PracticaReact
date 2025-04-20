import React from 'react'
import Santo from "../assets/SanMartin.jpg"

const Header = ({persona}) => {
  const {nombre,apellido,lenguajes,datos} = persona
  return (
    <div>
      <h1>Hola soy {nombre} {apellido} y me gusta  {lenguajes}, ademas soy {datos}</h1>
      <img src={Santo} alt="" />
    </div>
  )
}

export default Header