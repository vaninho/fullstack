import React, { useState } from "react";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give your feedback</h1>
      <Button text='Good' handleClick={goodFeedback} />
      <Button text='Neutral' handleClick={neutralFeedback} />
      <Button text='Bad' handleClick={badFeedback} />
      <Statistics result={{ good: good, neutral: neutral, bad: bad }} />
    </div>
  );
}

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );

}

const StatisticsLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>

  )
}

const Statistics = (props) => {

  const sum = () => {
    return props.result.good + props.result.neutral + props.result.bad
  }

  const average = () => {
    return ((props.result.good - props.result.bad) / sum())
  }
  const positive = () => {
    return (props.result.good / sum()) * 100 + '%'
  }

  if (sum() > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StatisticsLine text='Good' value={props.result.good} />
          </tr>
          <tr>
            <StatisticsLine text='Neutral' value={props.result.neutral} />
          </tr>
          <tr>
            <StatisticsLine text='Bad' value={props.result.bad} />
          </tr>
          <tr>
            <StatisticsLine text='Total votes' value={sum()} />
          </tr>
          <tr>
            <StatisticsLine text='Average' value={average()} />
          </tr>
          <tr>
            <StatisticsLine text='Positive' value={positive()} />
          </tr>
        </tbody>
      </table>
    );
  } else {
    return (
      <p>No feedback given</p>
    )
  }




}

export default App;