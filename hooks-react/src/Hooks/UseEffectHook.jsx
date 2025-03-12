import { useState, useEffect } from "react";

const UseEffectHook = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <p>Keçən vaxt: {seconds} saniyə</p>;
}

export default UseEffectHook
