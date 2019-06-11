import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Profile from "./images/imgone.jpg"

function App() {
  return (
    <div>
      <Header />
      {/* <Header2 /> */}
      <div className="wrapper">
        <div className="box1">
          <h2 id="aboutMe">About Me</h2>
          <img alt="profile photo" id="profileImg" src={Profile} />
          <p> I'm a coder, attorney, and dad to two children. I work primarily on financial issues as an attorney. I'm competent with front-end and back-end coding. I have included a few select projects on the portfolio page. This site is a WIP. </p>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
