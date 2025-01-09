import React from 'react';
import { Modal } from 'antd';

const GameModal = ({ game, isVisible, onClose }) => {
  return (
    <Modal
      title={game.title}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <img alt={game.title} src={game.image1} style={{ width: '100%' }} />
      <p>{game.description}</p>
      {/* Add more content here if necessary */}
    </Modal>
  );
};

export default GameModal;
