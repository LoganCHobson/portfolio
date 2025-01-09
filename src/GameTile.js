import React from 'react';
import { Card } from 'antd';
import './GameTile.css';

const { Meta } = Card;

const GameTile = ({ game, openModal }) => {
  
  return (
    <div className="game-tile" onClick={() => openModal(game)}>
      <Card
        hoverable
        cover={<img alt={game.title} src={game.frontImage} />}
      >
        <Meta title={game.title} description={game.description} />
      </Card>
    </div>
  );
};
export default GameTile;