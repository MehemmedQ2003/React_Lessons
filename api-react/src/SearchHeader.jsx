import { useState } from "react";

const SearchHeader = ({ search }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(value)
    }

    return (
        <div className='border rounded-3 my-3 p-3'>
            <form onSubmit={handleFormSubmit}>
                <label className='form-label'>What are you looking for?</label>
                <input value={value} onChange={handleChange} type="text" className='form-control mb-3' placeholder="Search..." />
            </form>
        </div>
    )
}

export default SearchHeader