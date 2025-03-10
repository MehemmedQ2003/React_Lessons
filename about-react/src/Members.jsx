import React from 'react'
import Member from './Member'

const members = [
    {
        name: 'Muhammad',
        description: 'I am Muhammad Gardashov, React Frontend and PhP backend Developer',
        image: 'https://picsum.photos/100',
        isCofunder: true
    },
    {
        name: 'Metin',
        description: 'I am Metin Gardashov, Python Django backend Developer',
        image: 'https://picsum.photos/200',
        isCofunder: false
    },
    {
        name: 'Mehmet',
        description: 'I am Mehmet Gardashov, React Frontend Developer',
        image: 'https://picsum.photos/300',
        isCofunder: false
    },
    {
        name: "Azer",
        description: "I am Azer Gardashov, React Frontend Developer",
        image: "https://picsum.photos/400",
        isCofunder: true
    }
]

const Members = () => {
    return (
        <ul className='d-flex flex-column'>

            {
                members.map((member, index) => (
                    <Member
                        key={index}
                        name={member.name}
                        description={member.description}
                        image={member.image}
                        isCofunder={member.isCofunder}
                    />
                ))
            }
        </ul>
    )
}

export default Members
