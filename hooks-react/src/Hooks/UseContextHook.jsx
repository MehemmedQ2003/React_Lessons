import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <p>Hazırki mövzu: {theme}</p>;
}

const UseContextHook = () => {
    return (
        <ThemeContext.Provider value="light">
            <ThemedComponent />
        </ThemeContext.Provider>
    )
}

export default UseContextHook
