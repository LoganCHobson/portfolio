import React from 'react';
import GameTile from './GameTile';

const GameTilesGrid = ({ games, openModal }) => {
  return (
    <div
      className="game-tiles-grid"
      style={{
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      {/* Projects Header */}
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        <h2
          style={{
            textDecoration: 'underline',
            fontSize: '2rem',
            margin: 0,
          }}
        >
          Projects
        </h2>
      </div>

      {/* Game Tiles Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {games.map((game, index) => (
          <GameTile key={index} game={game} openModal={openModal} />
        ))}
      </div>
    </div>
  );
};

export default GameTilesGrid;
