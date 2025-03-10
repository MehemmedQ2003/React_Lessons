import React, { useState } from "react";

const MyComponent = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className="container my-5">
            <h1>{props.title}</h1>
            <p>Count: <b>{count}</b></p>
            <button onClick={() => setCount(count - 1)} disabled={count === 0} className="btn btn-primary me-3">Decrease</button>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary me-3">Increase</button>
        </div>
    );
}

export default MyComponent
