import './App.css';
import CardList from './components/CardList';
import ProfileCard from './components/ProfileCard';
import Data from './data.json';
import {useState} from 'react';

function App() {
  const [timeframe, setTimeframe] = useState('daily');

  //function to pass prop from children
  const grabTimeframe = (time) => {
    setTimeframe(time)
  }

  return (
    <div className="App">
      <ProfileCard time={timeframe} func={grabTimeframe}/>
      <CardList data={Data} time={timeframe}/>
    </div>
  );
}

export default App;
