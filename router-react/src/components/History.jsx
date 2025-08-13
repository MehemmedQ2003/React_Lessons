import { Link, Outlet } from 'react-router-dom'

const History = () => {
    return (
        <div>
            <div>History</div>
            <nav style={{ display: "flex", gap: "1rem", backgroundColor: "black", padding: "1rem", color: "white" }}>
                <Link to="company" style={{ color: "white", textDecoration: "none" }}>Our History</Link>
                <Link to="team" style={{ color: "white", textDecoration: "none" }}>Team</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}

export default History