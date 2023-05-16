import { Component } from 'react'
import {getImage} from '../../api/getImage'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {Button} from '../Button/Button'

import IGCss from './ImageGallery.module.css'

export class ImageGallery extends Component {
    state = {
        imageBase: [],
        total: 0,
        page: "2",
    }

componentDidUpdate = (prevProps, prevState) => {

    if (prevProps.search !== this.props.search || prevState.page !== this.state.page) {
        getImage({query: this.props.search, page: this.state.page})
        .then(response => {
            this.setState({imageBase: response.hits})
            this.setState({total: response.total})
            console.log(response)
        })
        .catch(console.log("error"))
    }

}




    render() {
        return <>
        <ul className={IGCss.ImageGallery}>
            {this.state.imageBase.map(({id, webformatURL, tags}) => {
                return <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags}                />
            })}
      </ul>

      <Button />
      </>}
}