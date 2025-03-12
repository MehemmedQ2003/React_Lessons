import React, { useState } from 'react'

const UseStateHook = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default UseStateHook
