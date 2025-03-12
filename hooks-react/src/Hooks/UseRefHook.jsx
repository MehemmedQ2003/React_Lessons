import { useRef, useEffect } from "react";

const UseRefHook = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} placeholder="Buraya yaz..." />;
}

export default UseRefHook
