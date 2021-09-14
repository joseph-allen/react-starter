import './App.scss';
import React from 'react';
import Example from './components/example';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <div className="App-header">
          <p>
            Edit
            <code> src/App.js </code>
            and save to reload.
          </p>
          <div>
            <Example />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
