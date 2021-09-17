import React,{useState} from "react"

function App() {
  const [count, setCount] = useState(4)

   const decreaseCount = ()=> {
    setCount(prevCount => prevCount -1)
  }

  const increaseCount = ()=> {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <button onClick={decreaseCount}>+</button>
      <span>{count}</span>
      <button onClick={increaseCount}>-</button>
    </div>
  )
}

export default App;
