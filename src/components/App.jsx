import { Component } from 'react'

import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";



export class App extends Component {
  state = {
    search: "",
  }

  componentDidUpdate = (prevProps, prevState) => {
    
  }
  
  searchQuery = (value) => {
    this.setState({
      search: value
    })
  }


  render(){  
    return <>
      <Searchbar search={this.searchQuery}/>
      <ImageGallery search={this.state.search}/>
      </>}

};
