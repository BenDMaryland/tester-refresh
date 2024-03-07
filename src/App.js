import Counter from './components/Counter';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Counter initialCount={5}/>
      <Game />
    </div>
  );
}

export default App;
