import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateInput} = props
  const {suggestion} = suggestionsDetails

  const updateInputSearch = () => {
    updateInput(suggestion)
  }
  return (
    <li className="item-card1">
      <p className="items">{suggestion}</p>
      <button type="button" className="arrow-icon" onClick={updateInputSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
