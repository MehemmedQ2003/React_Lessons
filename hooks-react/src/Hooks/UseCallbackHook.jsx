import { useState, useCallback } from "react";

function Button({ handleClick }) {
    return <button onClick={handleClick}>Artır</button>;
}

const UseCallbackHook = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <p>Sayğac: {count}</p>
            <Button handleClick={increment} />
        </div>
    );
}

export default UseCallbackHook
