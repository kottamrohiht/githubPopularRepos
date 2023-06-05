import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = item

  return (
    <li className="repository-item-container">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="repository-heading"> {name} </h1>
      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="stars"
        />
        <p className="starsCount"> {starsCount} </p>
        <p className="starsCount"> stars </p>
      </div>

      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="stars"
        />
        <p className="starsCount"> {forksCount} </p>
        <p className="starsCount"> forks </p>
      </div>

      <div className="stars-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="stars"
        />
        <p className="starsCount"> {issuesCount} </p>
        <p className="starsCount"> issues </p>
      </div>
    </li>
  )
}

export default RepositoryItem
