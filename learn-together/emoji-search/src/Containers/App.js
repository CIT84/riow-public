import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header/Header'
import FilterEmoji from '../Components/FilterEmojiList/FilterEmojiList'
import SearchInput from '../Components/SearchInput/SearchInput'
import EmojiResult from '../Components/EmojiResult/EmojiResult'


class App extends Component {
  state = {
    filteredEmoji: FilterEmoji("", 50)
  }
  handleSearchChange = event => {
    this.setState({
      filteredEmoji: FilterEmoji(event.target.value, 10)
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput textChange={this.handleSearchChange} /> 
        <EmojiResult emojiData={this.state.filteredEmoji} />
      </div>
    )
  }
}

export default App
