import { useState, useEffect } from 'react';

import { ImageList } from './components/ImageList';

import './App.styles.css';

const App = () => {
const [page, setPage] = useState(1);
const [images, setImages] = useState([]);

useEffect(async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const data = await response.json();
    setImages([...images, ...data]);
}, [page]);

const showMore = () => setPage(page + 1);

  return (
    <div className="app">
      <h1 className='app-heading'>Images gallery</h1>
      <ImageList data={images} />
      <button className='show-more-btn' onClick={showMore}>Show more</button>
    </div>
  );
}

export default App;
