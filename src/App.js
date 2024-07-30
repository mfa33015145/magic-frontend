import React from 'react';
import './App.css';
import Splitting from 'splitting';
document.addEventListener('DOMContentLoaded', function() {
  Splitting();
});

function App() {
  React.useEffect(() => {
    Splitting();
  }, []);

  return (
    <div className="App">
      <div className="App">
        <nav>
          <a className="button" href="contacts.html" target="_blank" rel="noopener noreferrer">CONTACTS</a>
          <a className="button" href="projects.html" target="_blank" rel="noopener noreferrer">PROJECTS</a>
          <a className="button" href="portfolio.html" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
        </nav>
      </div>
      <div className="loading">
        <span className="char" style={{ '--char-index': 0 }}>W</span>
        <span className="char" style={{ '--char-index': 1 }}>E</span>
        <span className="char" style={{ '--char-index': 2 }}>L</span>
        <span className="char" style={{ '--char-index': 3 }}>C</span>
        <span className="char" style={{ '--char-index': 4 }}>O</span>
        <span className="char" style={{ '--char-index': 5 }}>M</span>
        <span className="char" style={{ '--char-index': 6 }}>E</span>
        <span className="char" style={{ '--char-index': 7 }}>-</span>
        <span className="char" style={{ '--char-index': 8 }}>T</span>
        <span className="char" style={{ '--char-index': 9 }}>O</span>
        <span className="char" style={{ '--char-index': 10 }}>-</span>
        <span className="char" style={{ '--char-index': 11 }}>M</span>
        <span className="char" style={{ '--char-index': 12 }}>A</span>
        <span className="char" style={{ '--char-index': 13 }}>G</span>
        <span className="char" style={{ '--char-index': 14 }}>I</span>
        <span className="char" style={{ '--char-index': 15 }}>C</span>
        <span className="char" style={{ '--char-index': 16 }}>-</span>
        <span className="char" style={{ '--char-index': 17 }}>F</span>
        <span className="char" style={{ '--char-index': 18 }}>R</span>
        <span className="char" style={{ '--char-index': 19 }}>O</span>
        <span className="char" style={{ '--char-index': 20 }}>N</span>
        <span className="char" style={{ '--char-index': 21 }}>T</span>
        <span className="char" style={{ '--char-index': 22 }}>E</span>
        <span className="char" style={{ '--char-index': 23 }}>N</span>
        <span className="char" style={{ '--char-index': 24 }}>D</span>
      </div>
    </div>
  );
}

export default App;