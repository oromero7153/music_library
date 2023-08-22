import GalleryItem from './GalleryItem'

function Gallery(props){
    const display=props.data.map((item, index)=> <GalleryItem item={item} key ={index}/>) 
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery