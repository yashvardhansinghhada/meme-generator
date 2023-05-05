import logo from './logo.svg';
import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className="px-10 py-8">

        <Meme></Meme>
      </div>
    </div>
  );
}

export default App;
