const ImageItem = ({ imageItems }) => {
    return (
        <div>
            <img width={250} height={250} src={imageItems.urls.regular} alt={imageItems.alt_description} />
        </div>
    )
}

export default ImageItem
