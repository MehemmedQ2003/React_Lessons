import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className='container my-5'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} className='btn btn-info'>Increase</button>
        </div>
    )
}

export default UseEffectHook
