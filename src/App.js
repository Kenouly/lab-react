import React from 'react';
import logo from './ironhack-logo.svg';
import nav from './menu-top.svg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import './App.css';

const introTitle = <h1>Say hello to ReactJS</h1>
const introText = <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
const introButton = <button>Awesome!</button>
const titles = ['Declarative', 'Components', 'Single-Way', 'JSX']
const info = ['React makes it painless to create interactive UIs.', 'Build encapsulated  components that manage ther state.', 'A set of immutable values are passed to the components.', 'Statically typed, designed to run on modern browsers.']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={nav} className="App-menu-top" alt="menu-top"/>
        </nav>
        <div className="App-intro">
          {introTitle}
          {introText}
          {introButton}
        </div>
      </header>
      <div className="App-info-container">
        <div className="App-info-details">
          <img src={icon1} alt="icon1"/>
          <h3>{titles[0]}</h3>
          <p>{info[0]}</p>
        </div>
        <div className="App-info-details">
          <img src={icon2} alt="icon2"/>
          <h3>{titles[1]}</h3>
          <p>{info[1]}</p>
        </div>
        <div className="App-info-details">
          <img src={icon3} alt="icon3" />
          <h3>{titles[2]}</h3>
          <p>{info[2]}</p>
        </div>
        <div className="App-info-details">
          <img src={icon4} alt="icon4" />
          <h3>{titles[3]}</h3>
          <p>{info[3]}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
