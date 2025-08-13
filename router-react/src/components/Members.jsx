import { Link, useSearchParams } from 'react-router-dom'

const Members = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const isActive = searchParams.get('filter') === 'active';
    return (
        <div>
            Members
            <Link style={{ display: "block" }} to={`/members/1`}>Details</Link>
            <button style={{ display: "block", margin: "10px 0" }} onClick={() => setSearchParams({filter: 'active'})}>Actives members</button>
            <button style={{ display: "block", margin: "10px 0" }} onClick={() => setSearchParams({ filter: 'all' })}>All members</button>
            {isActive && <h2>Showing active members</h2> || <h2>Showing all members</h2>}
        </div>
    )
}

export default Members
