import React from 'react'
import ReactDOM from 'react-dom'

const Hola = (prom) =>{
  console.log("Estoy pasando por aqui")
  
  return(
    <p>Bienvenido {prom.nombre}</p>
  )
}


const App = () => ( 
  <div>
    <p>Hello world</p> 
    <Hola nombre="Diego Hernadez"/>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root')) 