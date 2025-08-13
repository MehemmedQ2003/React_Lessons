import { useNavigate } from "react-router-dom"

const Mission = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>Mission</div>
            <button onClick={() => navigate("/")} >Go to Home</button> 
        </div>
    )
}

export default Mission
