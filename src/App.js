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
      frontDescription: "A single player, first person, rogue-like, made in a Game Jam with Unity.",
      description: 'Wakefield is a fast paced rogue like with shifting rooms and scaling enemies. You must traverse the simulation and fight enemies so you can return to the hub to buy more upgrades lest the AI overwhelm you!',
      downloadLink: 'https://solarsky.itch.io/wakefield/download/eyJleHBpcmVzIjoxNzM2NDY0NzExLCJpZCI6Mjc5MDk2M30%3d.ySqUdb24R%2f2ZaG85TyaIu8S7cas%3d',
    },
    {
      title: 'Frankensteins Hitman',
      frontImage: "/portfolio/FrankenstineResources/Title.png",
      images: ['/portfolio/FrankenstineResources/img1.png', '/portfolio/FrankenstineResources/img2.png', '/portfolio/FrankenstineResources/img3.png', '/portfolio/FrankenstineResources/img4.png', '/portfolio/FrankenstineResources/img5.png'],
      frontDescription: "A single player, first person, Doom64-like, made in a Game Jam with Unity.",
      description: 'You may not be a monster. . Actually, maybe you are. With your trusty revolver, you must wade through hordes of enemies who try and stand in your way as you make for your target.',
      downloadLink: 'https://yourgeekeric.itch.io/frankensteins-hitman',
    },
    {
      title: 'Astral Disorder',
      frontImage: "/portfolio/AstralDisorderResources/Title.png",
      images: ['/portfolio/AstralDisorderResources/img1.jpg', '/portfolio/AstralDisorderResources/img2.jpg', '/portfolio/AstralDisorderResources/img3.jpg', '/portfolio/AstralDisorderResources/img4.jpg', '/portfolio/AstralDisorderResources/img5.jpg'], 
      frontDescription: "A single player, first person, horror game, made as a senior project with Unity.",
      description: 'Stuck on an automated passenger terminal for space trains, you WERE tasked with maintaining the place. Instead, something unidentified crashes into the station and from it crawls an apex predator. Escape or die trying',
      downloadLink: 'https://store.steampowered.com/app/2866580/Astral_Disorder/',
    },
    {
      title: 'Garden of Doom',
      frontImage: "/portfolio/GardenOfDoomResources/Title.png",
      images: ['/portfolio/GardenOfDoomResources/img1.png', '/portfolio/GardenOfDoomResources/img2.png'], 
      frontDescription: "A single player, third person, Vampire Survivors-like game, made in a Game Jam with a proprietary engine called Canis.",
      description: 'Weeding used to be a simple chore. Now its a way of life. Cleave through waves of waves of evil plants while attaining powerful upgrades to stay in the fight!',
      downloadLink: '',
    },
    {
      title: 'Crown of Screws',
      frontImage: "/portfolio/CrownOfScrewsResources/Title.png",
      images: ['/portfolio/CrownOfScrewsResources/img1.png', '/portfolio/CrownOfScrewsResources/img2.png', '/portfolio/CrownOfScrewsResources/img3.png', '/portfolio/CrownOfScrewsResources/img4.png', '/portfolio/CrownOfScrewsResources/img5.png'], 
      frontDescription: "A single player, first person, wave survival game, made in a game jam with Unity.",
      description: "Crash landed on a strange unknown world, you come under assault by legions of automatons. Only by utilizing questionably useful new tricks as you go, will you survive.",
      downloadLink: 'https://yourgeekeric.itch.io/crown-of-screws',
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
