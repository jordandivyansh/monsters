import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/SearchBox'

function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>setMonster(users));
  },[])

  const onSearchChange = (event)=>{
    setSearchField(event.target.value)
  }

  const filteredMonsters = monster.filter(monster => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !monster.length ?
  <h1> Loading... </h1>:
  (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder ='search monster' searchChange = {onSearchChange} />
      <CardList monsters = {filteredMonsters}/>
  </div>
  );
}

export default App;
