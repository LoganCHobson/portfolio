import React from 'react';
import GameTile from './GameTile';  // Import the GameTile component
import GameModal from './GameModal'; // Import the GameModal component

const games = [
  {
    title: 'Game 1',
    image: 'path/to/game1-image.jpg',
    description: 'A brief description of Game 1.',
    id: 1
  },
  {
    title: 'Game 2',
    image: 'path/to/game2-image.jpg',
    description: 'A brief description of Game 2.',
    id: 2
  },
  // Add more games here
];

export default function GameGrid() {
  const [selectedGame, setSelectedGame] = React.useState(null);

  const handleTileClick = (game) => {
    setSelectedGame(game);
  };

  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameTile key={game.id} game={game} onClick={handleTileClick} />
      ))}

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
  );
}
