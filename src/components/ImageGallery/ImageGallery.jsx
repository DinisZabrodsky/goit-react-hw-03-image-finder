import { Component } from 'react'
import {getImage} from '../../api/getImage'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'
import {Button} from '../Button/Button'

import IGCss from './ImageGallery.module.css'

export class ImageGallery extends Component {
    state = {
        imageBase: [],
        total: 0,
        page: 1,
        new: true,
        load: false,
    }

componentDidUpdate = (prevProps, prevState) => {

        if (prevProps.search !== this.props.search || prevState.page !== this.state.page) {
            this.setState({load: true})

            return getImage({query: this.props.search, page: this.state.page})
            .then(response =>{

                if(response.total === 0) {
                    alert(`Нажаль за запитом "${this.props.search}" нічого не знайдено`)
                }

                if (prevProps.search !== this.props.search) {
                    return this.setState({
                        page: 1,
                        total: response.total,
                        imageBase: response.hits,
                        new: true,
                    }) 
                }

                if(prevState.page !== this.state.page && !this.state.new) {
                    return this.setState({imageBase: [...prevState.imageBase, ...response.hits] })
                }

                
            }).catch(console.log("error")).finally(this.setState({load: false}))
        }  

        // if (prevProps.search !== this.props.search) {
        //     this.setState({load: true})
        //     return getImage({query: this.props.search, page: 1})
        //     .then(response =>{
        //         return this.setState({
        //                         page: 1,
        //                         total: response.total,
        //                         imageBase: response.hits,
        //                         new: true,
        //                     }) 
        //     }).catch(console.log("error")).finally(this.setState({load: false}))
        // }  
        
        // if(prevState.page !== this.state.page && !this.state.new) {
        //     this.setState({load: true})
        //     return getImage({query: this.props.search, page: this.state.page})
        //     .then(response =>{
        //         return this.setState({imageBase: [...prevState.imageBase, ...response.hits] })
        //     }).catch(console.log("error")).finally(this.setState({load: false}))
        // }

    
}   

    addMore = () => {
        this.setState( prev =>{return {
            page: prev.page + 1,
            new: false
            }})
    }


    render() {
        return <>
        <ul className={IGCss.ImageGallery}>
            {this.state.imageBase.map(({id, webformatURL, tags}) => {
                return <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags}                />
            })}
      </ul>

       { this.state.imageBase.length > 0 && this.state.imageBase.length < this.state.total && <Button addMore={this.addMore}/>} 
      
      </>}
}