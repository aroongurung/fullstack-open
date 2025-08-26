import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

//Good Button  
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAllClicks(updatedGood + neutral + bad)
  }
//Neutral Button
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAllClicks(good + updatedNeutral + bad)
  }
//Bad Button
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAllClicks(good + neutral + updatedBad)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}     
      />
    </>
  )
}

export default App