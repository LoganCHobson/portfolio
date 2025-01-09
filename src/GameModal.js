import React from 'react';
import { Modal, Carousel } from 'antd';

const GameModal = ({ game, isVisible, onClose }) => {
  if (!game) return null; 
  return (
    <Modal
      title={game.title}
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      
      <Carousel dots={true} autoplay>
  {game.images.map((image, index) => (
    <div key={index}>
      <img alt={game.title} src={image} style={{ width: '100%' }} />
    </div>
  ))}
</Carousel>
      <p>{game.description}</p>
    </Modal>
  );
};

export default GameModal;
