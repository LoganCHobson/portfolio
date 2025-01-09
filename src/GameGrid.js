import React from 'react';
import GameTile from './GameTile';

const GameTilesGrid = ({ games, openModal }) => {
  return (
    <div
      className="game-tiles-grid"
      style={{
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
     
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        <h2
          style={{
            marginTop: '30px', 
            textDecoration: 'underline',
            fontSize: '2rem',
            margin: 0,
          }}
        >
          Projects
        </h2>
      </div>


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