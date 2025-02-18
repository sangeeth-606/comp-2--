/* eslint-disable react/prop-types */
import { useState } from 'react'


function LikeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked)

  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  )
}

export default LikeButton