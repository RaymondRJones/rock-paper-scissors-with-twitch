import './App.css';
import React, { useState, useEffect } from 'react';
import Piece from './components/Piece';
import {generateRandomItems, border, getNewType} from './util';
function App() {


  const [items, setItems] = useState(generateRandomItems(12));

  useEffect(() => {

    const interval = setInterval(() => {
      setItems(prevItems => {
        const newItems = prevItems.map(item => {
          let newDirection = { ...item.direction };

          if (item.position.x + item.velocity.x * item.direction.x < border.left || 
              item.position.x + item.velocity.x * item.direction.x > border.right - 100) {
            newDirection.x *= -1;
          }

          if (item.position.y + item.velocity.y * item.direction.y < border.top || 
              item.position.y + item.velocity.y * item.direction.y > border.bottom - 100) {
            newDirection.y *= -1;
          }

          return {
            ...item,
            position: {
              x: item.position.x + item.velocity.x * newDirection.x,
              y: item.position.y + item.velocity.y * newDirection.y,
            },
            direction: newDirection,
          };
        });
        
        
        for (let i = 0; i < newItems.length; i++) {
          for (let j = i + 1; j < newItems.length; j++) {
            const dx = newItems[i].position.x - newItems[j].position.x;
            const dy = newItems[i].position.y - newItems[j].position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) { 
              const newType = getNewType(newItems[i].type, newItems[j].type);
              newItems[i].type = newType;
              newItems[j].type = newType;
            }
          }
        }

        return newItems;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {items.map(item => (
        <Piece
          key={item.id}
          type={item.type}
          position={item.position}
        />
      ))}
    </div>
  );
}

export default App;

