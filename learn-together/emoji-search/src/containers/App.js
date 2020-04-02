import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header'
import FilterEmoji from '../components/FilterEmojiList/FilterEmojiList'
import SearchInput from '../components/SearchInput/SearchInput'
import EmojiResult from '../components/EmojiResult/EmojiResult'
import Modal from '../components/UI/Modal/Modal'
import EmojiView from '../components/EmojiResult/EmojiView/EmojiView'
import EmojiCollection from '../components/EmojiCollection/EmojiCollection'
import axios from '../axios.collection'

class App extends Component {
  state = {
    filteredEmoji: FilterEmoji("", 50),
    viewing: false,
    saving: false,
    cancelSaving: false,
    currentEmoji: [],
    emojiCollection: []
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: FilterEmoji(event.target.value, 10)
    })
  }

  handleResultClick = (keywords, src) => {
    this.setState({
      viewing: true,
      currentEmoji: [keywords, src]
    })
  }

  handleReviewCancel = event => {
    this.setState({
      viewing: false
    })
  }

  handleAddToCollection = (emoji) => {
    const emojiCollection = [...this.state.emojiCollection]
    emojiCollection.push(emoji)
    this.setState({
      viewing: false,
      emojiCollection: emojiCollection
    })
   
  }

  handleSaveToCollection = () => {
   
    this.setState({
      saving: true
    })
  }

  handleSaveCancel = event => {
    this.setState({
      saving: false
    })
  }

  handleSaveToCloud = (event) => {
    const collectionName = event.target[0].value
    event.preventDefault()
    axios.post(`/collections/${collectionName}.json`, this.state.emojiCollection)
    this.setState({
      saving: false,
      emojiCollection: ''
    })
    event.target[0].value = ''
  }


  render() {
    return (
      <div className="App">
        <Modal show={this.state.viewing} modalClosed={this.handleReviewCancel}>
            <EmojiView addToCollection={this.handleAddToCollection} selectedEmoji={this.state.currentEmoji}/>
        </Modal>
        <Header />
      
        <EmojiCollection 
          currentCollection={this.state.emojiCollection} 
          saveTo={this.handleSaveToCollection} 
          
          saveCollection={this.state.saving}

          modalClosed={this.handleSaveCancel}
          saveToCloud={this.handleSaveToCloud}
          />

        <SearchInput textChange={this.handleSearchChange} /> 
        <EmojiResult click={this.handleResultClick} emojiData={this.state.filteredEmoji} />
      </div>
    )
  }
}

export default App
