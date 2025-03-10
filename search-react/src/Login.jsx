import React, { useState } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className='container my-5'>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} className={isLoggedIn ? "btn btn-danger" : "btn btn-success"}>{isLoggedIn ? "Logout!" : "Login"}</button>
        </div>
    )
}

export default Login
