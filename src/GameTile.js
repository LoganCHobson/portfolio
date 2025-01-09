import React from 'react';

function GameTile({ game, onClick }) {
  return (
    <div className="game-tile" onClick={() => onClick(game)}>
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.description}</p>
    </div>
  );
}

export default GameTile;
