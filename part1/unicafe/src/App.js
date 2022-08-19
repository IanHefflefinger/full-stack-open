import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(1);
  const positive = (good / all) * 100;

  if (all == 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <StatisticLine stat={good} text="good" />
      <StatisticLine stat={neutral} text="neutral" />
      <StatisticLine stat={bad} text="bad" />

      <StatisticLine stat={all} text="all" />
      <StatisticLine stat={average} text="average" />
      <StatisticLine stat={positive + " %"} text="positive" />
    </table>
  );
};

const StatisticLine = ({ text, stat }) => (
  <tr>
    <td>{text} </td>
    <td>{stat}</td>
  </tr>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App