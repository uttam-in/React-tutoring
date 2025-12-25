import { useState } from 'react';

interface LikeButtonProps {
  initialLikes?: number;
  onLike?: (likes: number) => void;
}

export function LikeButton({ initialLikes = 0, onLike }: LikeButtonProps) {

  const [Likes, setLikes] = useState(initialLikes);

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    const newLikes = isLiked ? Likes - 1 : Likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);
    onLike?.(newLikes);
  };

//   const handleClick = function() {
//     const newLikes = isLiked ? Likes - 1 : Likes + 1;
//     setLikes(newLikes);
//     setIsLiked(!isLiked);
//     if (onLike) {
//         onLike(newLikes);
//     }
// };


  return (
    <button
      onClick={handleClick}
      style={{
        padding: '8px 16px',
        fontSize: '15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: isLiked ? '#e91e63' : '#f0f0f0', // background-color
        color: isLiked ? 'white' : '#333',
        transition: 'all 0.2s ease',
      }}
    >
      {isLiked ? '❤️' : '🤍'} {Likes}
    </button>
  );
}
