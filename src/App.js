import React, {useState, useMemo} from 'react';
import './App.css';

function App() {
  const [searchItem, setSearchItem] = useState('');

  const items = useMemo(()=>[
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'ElderBerry',
    'Fig',
    'Grape',
  ], []);

  const filteredItems = useMemo(()=>{
    return items.filter(item => item.toLowerCase().includes(searchItem.toLowerCase()));
  },[searchItem, items])

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" placeholder='Search Item...' value={searchItem} onChange={handleSearch}/>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
