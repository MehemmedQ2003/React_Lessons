import React from 'react'

const Member = ({ name, description, image, isCofunder }) => {
    return (
        <li className={`member ${isCofunder ? 'co-funder' : ''}`}>
            <div className='thumb'>
                <img src={image} className='img-fluid' style={{ width: "100px" }} />
            </div>
            <div className="description">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}

export default Member
