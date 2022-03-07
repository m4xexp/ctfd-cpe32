import { TestImage } from 'components/TestCompoent';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';
import Leaderboard from 'Pages/Leaderboard';
import NavBarAfterLogin from 'components/NavBarAfterLogin';

const App = () => {
  return (
    <div className="App">
      <NavBarAfterLogin />
      <header className="App-header">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
        </Routes>
      </header>
    </div>
  );
}


export default App;

