/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const findValue = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="logo-card-list">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="logo-card-list1">
          <div className="search-container">
            <div className="logo-container">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search Google"
                className="input-logo"
                value={searchInput}
                onChange={this.onInputSearch}
              />
            </div>
            <div className="list-card">
              <ul className="item-card">
                {findValue.map(eachItem => (
                  <SuggestionItem
                    suggestionsDetails={eachItem}
                    key={eachItem.id}
                    updateInput={this.updateInput}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
