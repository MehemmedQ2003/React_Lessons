import { useState } from 'react';
import { searchImages } from './api';
import SearchHeader from './SearchHeader'
import Container from 'react-bootstrap/Container'
import ImageList from './components/ImageList';

function App() {
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }

    return (
        <Container>
            <h1 className='mt-3 text-center'>Find Image with search api</h1>
            <SearchHeader search={handleSubmit} />
            <ImageList imagePlaceholder={images}/>
        </Container>
    )
}

export default App