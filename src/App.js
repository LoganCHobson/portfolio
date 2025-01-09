import React from "react";
import "./App.css";
import GameGrid from "./GameGrid"; // Assuming you already have this component

function App() {
  return (
    <div className="App">
      {/* Banner */}
      <header className="banner">
        <h1>Logan Hobson</h1>
      </header>

      {/* Navigation */}
      <nav className="floating-nav">
        <ul>
          <li><a href="#games">Games</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Games Section */}
      <section id="games" className="games-section">
        <h2>My Games</h2>
        <GameGrid />
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: "90%" }}></div>
          <span>React</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}></div>
          <span>Unity</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: "75%" }}></div>
          <span>C#</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>Email: logan@example.com</p>
        <p>LinkedIn: linkedin.com/in/loganhobson</p>
      </section>
    </div>
  );
}

export default App;
