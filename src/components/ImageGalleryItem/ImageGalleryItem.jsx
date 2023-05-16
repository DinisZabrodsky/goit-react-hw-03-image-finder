import IGICss from './ImageGalleryItem.module.css';

export function ImageGalleryItem ({webformatURL, tags}) {
    return(<li className={IGICss.imageGalleryItem}>
        <img  src={webformatURL} alt={tags} className={IGICss.imageGalleryItemImage}/>
    </li>)
    
}