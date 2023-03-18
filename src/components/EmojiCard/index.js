// Write your code here.
import './index.css'

function EmojiCard(props) {
  const {name, id, url, onClickEmoji} = props
  const emojiCLicked = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card" onClick={emojiCLicked}>
      <button type="button">
        <img src={url} alt={name} />
      </button>
    </li>
  )
}

export default EmojiCard
