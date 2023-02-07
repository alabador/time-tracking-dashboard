import './App.css';
import CardList from './components/CardList';
import ProfileCard from './components/ProfileCard';
import Data from './data.json';
import {useState} from 'react';

function App() {
  const [data, setData] = useState(Data)
  return (
    <div className="App">
      <ProfileCard />
      <CardList data={data}/>
    </div>
  );
}

export default App;
