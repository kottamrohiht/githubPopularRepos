import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeLanguage: languageFiltersData[0].id,
    laguageData: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getLaguageData()
  }

  getLaguageData = async () => {
    this.setState({
      isLoading: true,
    })

    const {activeLanguage} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeLanguage}`

    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.popular_repos.map(each => ({
      id: each.id,
      forksCount: each.forks_count,
      avatarUrl: each.avatar_url,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    if (response.ok) {
      this.setState({
        laguageData: updatedData,
        isLoading: false,
      })
    }
  }

  updateActiveLanguage = id => {
    this.setState(
      {
        activeLanguage: id,
      },
      this.getLaguageData,
    )
  }

  renderLanguageData = () => {
    const {activeLanguage} = this.state

    return (
      <ul className="language-container">
        {languageFiltersData.map(each => (
          <LanguageFilterItem
            key={each.id}
            languageFiltersData={each}
            activeLanguage={activeLanguage}
            isActive={each.id === activeLanguage}
            updateActiveLanguage={this.updateActiveLanguage}
          />
        ))}
      </ul>
    )
  }

  renderLanguageDataList = () => {
    const {laguageData} = this.state

    return (
      <ul className="upadte-laguage-container">
        {laguageData.map(each => (
          <RepositoryItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="popular-heading">Popular</h1>
        {this.renderLanguageData()}
        {isLoading ? this.renderLoadingView() : this.renderLanguageDataList()}
      </div>
    )
  }
}

export default GithubPopularRepos
