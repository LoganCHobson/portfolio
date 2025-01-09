import React, { useState } from 'react';
import { Layout } from 'antd';
import NavBar from './NavBar';
import Banner from './Banner';
import GameModal from './GameModal';
import Skills from './Skills';
import Contact from './Contact';
import GameTilesGrid from './GameGrid';
const { Content } = Layout;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGame, setSelectedGame] = useState({
    title: 'Game Title',
    image1: 'path/to/image1.jpg',
    image2: 'path/to/image2.jpg',
    image3: 'path/to/image3.jpg',
    description: 'A brief description of the game.',
  });

  const openModal = (game) => {
    setSelectedGame(game);
    setIsModalVisible(true);
  };

  const closeModal = () => setIsModalVisible(false);

  const games = [
    {
      title: 'Game 1',
      image1: 'path/to/image1.jpg',
      description: 'A fun game about...',
    },
    {
      title: 'Game 2',
      image1: 'path/to/image2.jpg',
      description: 'An exciting adventure where...',
    },
    {
      title: 'Game 3',
      image1: 'path/to/image3.jpg',
      description: 'A puzzle game where...',
    },
  ];

  return (
    <Layout >
      <NavBar />
      <Content style={{ marginTop: '64px'}}> 
        <div id="home" >
          <Banner />
        </div>

        <div >
          <GameTilesGrid games={games} openModal={openModal} />
        </div>

        <div id="skills" >
          <Skills />
        </div>

        <div id="contact" >
          <Contact />
        </div>
      </Content>

      <GameModal
        game={selectedGame}
        isVisible={isModalVisible}
        onClose={closeModal}
      />
    </Layout>
  );
}

export default App;
