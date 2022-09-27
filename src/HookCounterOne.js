import React, { useEffect, useState } from 'react'


function HookCounterOne() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    let r = "you Clicked" + " " + count
    let p = `you Clicked  ${count}`
    document.title = p
    return () => {
      console.log("cleanup")
    }
  }, [count])

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={increment}>click {count} times</button>
      <button onClick={decrement}>click {count} times</button>
    </div>
  )
}
export default HookCounterOne
