import { useState } from "react"

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const StatLine = ({ text, count, unit }) => (
  <>
    <td>{text}:</td>
    <td>
      {count} {unit}
    </td>
  </>
)

const Statictics = ({ props }) => {
  console.log("re-rendering statistics...")
  return (
    <table>
      {props.map((prop) => (
        <tr>
          <StatLine
            text={prop.name}
            count={Number.isNaN(prop.count) ? "No data" : prop.count}
            unit={prop.unit && !Number.isNaN(prop.count) ? prop.unit : ""}
          />
        </tr>
      ))}
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const values = {
    good: 1,
    neutral: 0,
    bad: -1,
  }

  const handleClick = (state, callback) => () => callback(state + 1)

  const total = () => good + neutral + bad
  const avg = () => {
    return (
      (good * values.good + neutral * values.neutral + bad * values.bad) /
      total()
    )
  }
  const positive = () => {
    return (good / total()) * 100
  }

  const statistics = [
    {
      name: "good",
      count: good,
      unit: null,
    },
    {
      name: "neutral",
      count: neutral,
      unit: null,
    },
    {
      name: "bad",
      count: bad,
      unit: null,
    },
    {
      name: "all",
      count: total(),
      unit: null,
    },
    {
      name: "average",
      count: avg(),
      unit: null,
    },
    {
      name: "positive",
      count: positive(),
      unit: "%",
    },
  ]

  return (
    <div>
      <Header text={"give feedback"} />
      <Button text={"good"} onClick={handleClick(good, setGood)} />
      <Button text={"neutral"} onClick={handleClick(neutral, setNeutral)} />
      <Button text={"bad"} onClick={handleClick(bad, setBad)} />
      <Header text={"statistics"} />
      {total() === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statictics props={statistics} />
      )}
    </div>
  )
}

export default App
