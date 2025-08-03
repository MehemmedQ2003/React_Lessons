import ImageItem from "./ImageItem"

const ImageList = ({ imagePlaceholder = [] }) => {
    return (
        <div className="d-flex flex-wrap gap-2">
            {imagePlaceholder.map((image) => {
                return (
                    <ImageItem key={image.id} imageItems={image}/>
                )
            })}
        </div>
    )
}

export default ImageList
