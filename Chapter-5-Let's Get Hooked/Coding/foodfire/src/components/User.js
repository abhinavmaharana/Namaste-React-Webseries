import { useState } from "react"

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
        <h1>Name: {props.name}</h1>
        <h1>Count = {count}</h1>
        <h3>Location: Noida</h3>
    </div>
  )
}

export default User