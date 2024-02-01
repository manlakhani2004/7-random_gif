import logo from './logo.svg';
import './App.css';
import RandomGif from './components/RandomGif';
import SearchGif from './components/searchGif';

function App() {
  return (
    <div className="wrapper">
      <nav className='navbar'>
        <h1>RANDOM GIF</h1>
      </nav>

      <RandomGif/>

      <SearchGif/>
    </div>
  );
}

export default App;
