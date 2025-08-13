import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{ display: "flex", gap: "1rem", backgroundColor: "black", padding: "1rem", color: "white" }}>
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>Home</NavLink>
            <NavLink to="/about" style={{ color: "white", textDecoration: "none" }}>About</NavLink>
            <NavLink to="/history" style={{ color: "white", textDecoration: "none" }}>History</NavLink>
        </nav>
    )
}

export default Navbar
