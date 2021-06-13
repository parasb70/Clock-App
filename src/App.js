import logo from './logo.svg';
import './App.css';
import Clock1 from './components/Clock1';
import Clock2 from './components/Clock2';
import Clock3 from './components/Clock3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    <div className="App-header-clock">
      <Clock1/>
      <Clock2/>
      <Clock3/>
    </div>
    </div>
  );
}

export default App;
