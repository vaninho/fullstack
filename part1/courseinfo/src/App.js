import React from "react";

function App() {

  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentalz of React',
        exercices: 10
      },
      {
        name: 'Using props to pass data',
        exercices: 7

      }, {
        name: 'State of component',
        exercices: 14
      }

    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) => {

  return (
    <h1>
      {props.course}
    </h1>
  );

}

const Content = (props) => {

  return (
    <>
      {props.parts.map(part => {
        return (
          <React.Fragment key={part.name}>
            <Part part={part.name} exercices={part.exercices} />
          </React.Fragment>
        )
      })}
    </>
  );

}

const Total = (props) => {

  let sum = 0
  props.parts.forEach(part => sum += part.exercices)

  return (
    <p>Number of exercices {sum}</p>
  );

}

const Part = (props) => {
  console.log('Part: ' + props)
  return (
    <>
      <p>{props.part} {props.exercices}</p>
    </>
  )
}

export default App;