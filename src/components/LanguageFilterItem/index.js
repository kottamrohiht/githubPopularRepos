import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, isActive, updateActiveLanguage} = props
  const {id, language} = languageFiltersData

  const isActiveCss = isActive ? 'activeCss' : ''

  const buttonClicked = () => {
    updateActiveLanguage(id)
  }

  return (
    <li className="list-item">
      <button
        onClick={buttonClicked}
        type="button"
        className={`lan-button ${isActiveCss}`}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
