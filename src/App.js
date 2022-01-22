import { useState, useEffect } from 'react';

import './App.styles.css';

function App() {
const [limit, setLimit] = useState(10);
const [images, setImages] = useState([]);

useEffect(async () => {
    const response = await fetch(`https://picsum.photos/v2/list?limit=${limit}`);
    const data = await response.json();
    setImages(data);
}, [limit]);

const showMore = () => setLimit(limit + 10);

  return (
    <div className="app">
      <h1 className='app-heading'>Images gallery</h1>
      <button className='showMore-btn' onClick={showMore}>Show more...</button>
    </div>
  );
}

export default App;
