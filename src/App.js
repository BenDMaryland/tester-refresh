import { useState } from 'react';
import Counter from './components/Counter';
import Game from './components/Game';
import NavBar from './components/NavBar';

function App() {

  const [initialPage, setinitialPage] = useState("page1")

  function PageChangeHandler(e) {
    setinitialPage(e.target.name)
  }

  return (
    <div className="App">


      <NavBar initialPage={initialPage} PageChangeHandler={PageChangeHandler} />
      {initialPage === "page1" ? <Counter initialCount={5} /> :
        <Game />}
    </div>
  );
}

export default App;
