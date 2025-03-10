import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        alert("Button Clicked");
    }

    return (
        <div className='container my-5'>
            <button onClick={handleClick} className='btn btn-success'>Click button</button>
        </div>
    )
}

export default EventHandling
