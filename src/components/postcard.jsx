/* eslint-disable react/prop-types */
import LikeButton from './LikeButton'


// eslint-disable-next-line no-unused-vars
function PostCard({ id, profileImage, username, content, isLiked, onLike }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profileImage} alt={username} className="profile-image" />
        <h1 className="username">{username}</h1>
      </div>
      <div className="post-content">
        <h2 className="content-text">{content}</h2>
      </div>
      <div className="post-footer">
        <LikeButton isLiked={isLiked} onLike={onLike} />
      </div>
    </div>
  )
}

export default PostCard