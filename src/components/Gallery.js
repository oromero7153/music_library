import GalleryItem from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

function Gallery(){
    const data = useContext(DataContext)
    const display=data.map((item, index)=> <GalleryItem item={item} key ={index}/>) 
function Gallery(props){

    const display = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery