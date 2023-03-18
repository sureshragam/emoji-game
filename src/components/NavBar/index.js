// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props

  return (
    <nav>
      <div className="nav-heading">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      {gameOver ? null : (
        <ul>
          <li>
            <p>Score: {score}</p>
          </li>
          <li>
            <p>Top Score: {topScore}</p>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
