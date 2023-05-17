import { Component } from 'react';


import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";



export class App extends Component {
  state = {
    search: "",
    modal: false,
    imageModal: "",
    tagModal: "",
  }

  openModal = (imageModal, tagModal) => {
    this.setState({modal: true, imageModal, tagModal})
  } 

  closeModal = () => {
    this.setState({modal: false})
  }
  
  searchQuery = (value) => {
    this.setState({
      search: value
    })
  }


  render(){  
    return <>
      {this.state.modal && <Modal imageModal={this.state.imageModal} tagModal={this.state.tagModal} closeModal={this.closeModal}/>}

      <Searchbar search={this.searchQuery}/>
      <ImageGallery search={this.state.search} openModal={this.openModal}/>
      {this.state.search === "" && <h2 style={{alignItems: 'center', textAlign: 'center'}}>Ведіть будьласка запит</h2>}

      </>}

};


