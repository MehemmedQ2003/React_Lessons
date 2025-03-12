import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
    const compute = (n) => {
        return n * 2;
    };

    const result = useMemo(() => compute(num), [num]);

    return <p>Nəticə: {result}</p>;
}


const UseMemoHook = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensiveCalculation num={count} />
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>Azalt</button>
            <button onClick={() => setCount(count + 1)}>Artır</button>
        </div>
    );
}

export default UseMemoHook
