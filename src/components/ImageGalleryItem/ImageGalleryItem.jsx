import IGICss from './ImageGalleryItem.module.css';

export function ImageGalleryItem ({webformatURL, tags, imageForModal, openModal}) {
    return(<li className={IGICss.imageGalleryItem}>
        <img  src={webformatURL} alt={tags} className={IGICss.imageGalleryItemImage} onClick={() => {openModal(imageForModal, tags)}}/>
    </li>)
    
}