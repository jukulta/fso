import { useState } from 'react'

const Button = ({ onClick, text, handleClick }) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const feedbacks = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1)/ feedbacks;
  const positives = (good / feedbacks * 100)
  if (feedbacks > 0) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={feedbacks}/>
        <StatisticLine text="average" value={average.toFixed(2)}/>
        <StatisticLine text="positive" value={positives.toFixed(2) + ' %'}/>
        </tbody>
        </table>
      </div>
    );
  } else {
    return <div><h2>statistics</h2>No feedback given</div>;
  }
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ count, setCount ] = useState(0)
  const [ total, setTotal ] = useState(0)

  const average = count / total
  const positive = 100 * count / good

  const handleGood = () => {
    setGood(good + 1)
    setCount(count + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setCount(count - 1)
    setTotal(total + 1)
  }

  return(
    <>
    <h2>give feedback</h2> 
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average}
        positive={positive} />
    </>
  )
}

export default App
