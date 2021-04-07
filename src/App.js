import logo from './logo.svg';
import './App.css';
import WordCloud from './components/WordCloud';
import con from './assets/con_logo.png';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img class="con_logo" src={con} alt="logo"/>
      </header>
      <body>
        <WordCloud/>
      </body>
    </div>
  );
}

export default App;
