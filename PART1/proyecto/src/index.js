import React from 'react'
import ReactDOM from 'react-dom'
//Componente Header
const Header =(promps)=>(
  <h1>{promps.NameCourse}</h1>
)
//Componente Content
const Content=(promps)=>(
<div>
  <Part part={promps.part1} exercises={promps.exercises1}/>
  <Part part={promps.part2} exercises={promps.exercises2}/>
  <Part part={promps.part3} exercises={promps.exercises3}/>
</div>
)
//Componente Total
const Total =(promps)=>(
  <p>Number of exercises promps {promps.total}</p>
)

//Componente Parte
const Part =(promps)=>(
  <p>
    {promps.part} {promps.exercises}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
  return (
    <div>
      <Header NameCourse={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> 
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))