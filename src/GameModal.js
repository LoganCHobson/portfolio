import React from 'react';
import { Modal, Carousel, Button } from 'antd';

const GameModal = ({ game, isVisible, onClose }) => {
  if (!game) return null; 
  return (
    <Modal
      title={game.title}
      open={isVisible}
      onCancel={onClose}
      footer={<Button key="download" href={game.downloadLink} target="_blank" type="primary">
      Download Game
    </Button>}
    >
      <div style={{borderRadius: '5px', backgroundColor: '#EDEDED', padding: '10px'}}>
      <Carousel dots={true} autoplay>
  {game.images.map((image, index) => (
    <div key={index}>
      <img alt={game.title} src={image} style={{ width: '100%' }} />
    </div>
  ))}
</Carousel>
      <p>{game.description}</p>
      </div>
    </Modal>
  );
};

export default GameModal;
