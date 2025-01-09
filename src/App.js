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
  const [selectedGame, setSelectedGame] = useState(null);

  const openModal = (game) => {
    setSelectedGame(game); 
    setIsModalVisible(true); 
  };

  const closeModal = () => setIsModalVisible(false); 

  const games = [
    {
      title: 'Wakefield',
      frontImage: "/portfolio/WakeFieldImages/Title.png",
      images: [
        '/portfolio/WakeFieldImages/img1.png',
        '/portfolio/WakeFieldImages/img2.png',
        '/portfolio/WakeFieldImages/img3.png',
        '/portfolio/WakeFieldImages/img4.png'
      ], 
      description: 'A fun game about...',
    },
    {
      title: 'Game 2',
      images: ['path/to/image4.jpg', 'path/to/image5.jpg'],
      description: 'An exciting adventure where...',
    },
    {
      title: 'Game 3',
      images: ['path/to/image6.jpg'], 
      description: 'A puzzle game where...',
    },
  ];

  return (
    <Layout>
      <NavBar />
      <Content style={{ marginTop: '64px' }}>
        <div id="home">
          <Banner />
        </div>
        <div id="projects">
          <GameTilesGrid games={games} openModal={openModal} />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="contact">
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
