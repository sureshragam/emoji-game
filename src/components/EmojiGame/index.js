import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/

// Write your code here.
class EmojiGame extends Component {
  state = {selectedEmojiList: [], userScore: 0, topScore: 0, gameOver: false}

  onClickEmoji = id => {
    this.setState(prevState => {
      if (prevState.selectedEmojiList.includes(id)) {
        return {
          gameOver: true,
        }
      }
      return {
        selectedEmojiList: [...prevState.selectedEmojiList, id],
        userScore: prevState.userScore + 1,
        gameOver:
          prevState.userScore >= 11 ? !prevState.gameOver : prevState.gameOver,
      }
    })
  }

  restartGame = () => {
    this.setState(prevState => ({
      selectedEmojiList: [],
      userScore: 0,
      gameOver: false,
      topScore:
        prevState.userScore > prevState.topScore
          ? prevState.userScore
          : prevState.topScore,
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {userScore, topScore, gameOver} = this.state
    const emojiList = this.shuffledEmojisList()
    return (
      <div className="emoji-game">
        <NavBar score={userScore} topScore={topScore} gameOver={gameOver} />
        {gameOver ? (
          <div className="game-over-card">
            <div className="col-1">
              {userScore === 12 ? <h1>You Won</h1> : <h1>You Lose</h1>}
              {userScore === 12 ? <p>Best Score</p> : <p>Score</p>}
              <p className="score">{userScore}/12</p>
              <button type="button" onClick={this.restartGame}>
                Play Again
              </button>
            </div>
            <div className="col-2">
              {userScore === 12 ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                  alt="win or lose"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                  alt="win or lose"
                />
              )}
            </div>
          </div>
        ) : (
          <ul className="emoji-cards">
            {emojiList.map(eachEmoji => {
              const {emojiName, emojiUrl, id} = eachEmoji
              return (
                <EmojiCard
                  name={emojiName}
                  key={id}
                  url={emojiUrl}
                  id={id}
                  onClickEmoji={this.onClickEmoji}
                />
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
