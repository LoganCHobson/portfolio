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
      frontImage: "/portfolio/WakeFieldResources/Title.png",
      images: [
        '/portfolio/WakeFieldResources/img1.png',
        '/portfolio/WakeFieldResources/img2.png',
        '/portfolio/WakeFieldResources/img3.png',
        '/portfolio/WakeFieldResources/img4.png'
      ], 
      frontDescription: "A single player, first person, rogue-like, made in a Game Jam.",
      description: 'Wakefield is a fast paced rogue like with shifting rooms and scaling enemies. You must traverse the simulation and fight enemies so you can return to the hub to buy more upgrades lest the AI overwhelm you!',
      downloadLink: 'https://solarsky.itch.io/wakefield/download/eyJleHBpcmVzIjoxNzM2NDY0NzExLCJpZCI6Mjc5MDk2M30%3d.ySqUdb24R%2f2ZaG85TyaIu8S7cas%3d',
    },
    {
      title: 'Frankenstines Hitman',
      frontImage: "/portfolio/FrankenstineResources/Title.png",
      images: ['/portfolio/FrankenstineResources/img1.png', '/portfolio/FrankenstineResources/img2.png', '/portfolio/FrankenstineResources/img3.png', '/portfolio/FrankenstineResources/img4.png', '/portfolio/FrankenstineResources/img5.png'],
      frontDescription: "A single player, first person, Doom64-like, made in a Game Jam.",
      description: 'You may be a monster. . Actually, thats it. With your trusty revolver, you must wade through hordes of enemies who try and stand in your way as you make for your target.',
      downloadLink: 'https://yourgeekeric.itch.io/frankensteins-hitman',
    },
    {
      title: 'Game 3',
      images: ['path/to/image6.jpg'], 
      description: 'A puzzle game where...',
      downloadLink: '',
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
