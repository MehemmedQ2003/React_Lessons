import { Link, useParams } from 'react-router-dom'

const MembersDetails = () => {
    const params = useParams();
    const memberId = params.id;
    return (
        <div>
            Member Details {memberId} 
        </div>
    )
}

export default MembersDetails
