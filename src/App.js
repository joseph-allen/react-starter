import './App.scss';
import Example from './components/example';
import Nav from './components/nav';
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Nav/>
      <Example></Example>
      <Footer/>
        </div>

      </div>

    </div>
  );
}

export default App;
