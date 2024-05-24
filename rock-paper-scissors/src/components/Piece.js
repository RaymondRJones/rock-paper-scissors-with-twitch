import React from 'react';

export default function Piece({ type, position }) {
  const typeToImageUrl = {
    "rock": "/rock.jpg",
    "paper": "/paper.jpg",
    "scissors": "/scissors.jpg",
  };
  
  const pieceImg = typeToImageUrl[type];
  const style = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: '100px',
    height: '100px',
  };

  return (
    <img src={pieceImg} alt={type} style={style} />
  );
}
