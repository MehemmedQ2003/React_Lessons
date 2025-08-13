import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>Home</div>
            <button onClick={() => navigate("/mission")} >Go to Mission</button>
        </div>
    )
}

export default Home
