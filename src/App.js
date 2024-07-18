import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <div className="botao-container">
          <div className="botao">
            <a href="contacts.html" target="_blank" className="nav-link">CONTACTS</a>
          </div>
          <div className="botao">
            <a href="portfolio.html" target="_blank" className="nav-link">PORTFOLIO</a>
          </div>
          <div className="botao">
            <a href="projects.html" target="_blank" className="nav-link">PROJECTS</a>
          </div>
        </div>
        <div className="Iam">
          <p>WELCOME TO</p>
          <b>
            <div className="innerIam">
              <div>MAGIC-FRONT-END</div>
              <div>YOUR USER EXPERIENCE</div>
              <div>TREATMENT WITH EQUALITY</div>
              <div>WHOEVER YOU ARE</div>
              <div>AND WHATEVER YOUR STYLE IS</div>
            </div>
          </b>
        </div>
      
    </div>
  );
}

export default App;
