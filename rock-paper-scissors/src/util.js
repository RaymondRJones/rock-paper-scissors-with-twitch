  
export const getNewType = (type1, type2) => {
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };
  return rules[type1] === type2 ? type1 : type2;
};

export const border = {
    left: 50,
    right: window.innerWidth - 50,
    top: 50,
    bottom: window.innerHeight - 50,
  };

export const generateRandomItems = (numItems) => {
  const types = ['rock', 'paper', 'scissors'];
  const items = [];

  for (let i = 0; i < numItems; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const position = {
      x: Math.floor(Math.random() * (border.right - border.left)) + border.left,
      y: Math.floor(Math.random() * (border.bottom - border.top)) + border.top,
    };
    const velocity = {
      x: Math.floor(Math.random() * 5) + 1,
      y: Math.floor(Math.random() * 5) + 1,
    };
    const direction = {
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
    };

    items.push({ id: i + 1, type, position, velocity, direction });
  }

  return items;
};
