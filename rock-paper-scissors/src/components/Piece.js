import React from 'react';

export default function Piece({type,velocity=2,direction=1}) {
  var type_to_image_url = {
    "rock": "/rock.jpg",
    "paper": "/paper.jpg",
    "scissors": "/scissors.jpg",
  }
  let pieceImg = type_to_image_url[type]
  return (
    <img src={pieceImg} alt=""/> 
  );
}

