import { useState, useEffect } from 'react';

import { ImageList } from './components/ImageList';
import { Popup } from './components/Popup';

import './App.styles.css';

const App = () => {
const [page, setPage] = useState(1);
const [images, setImages] = useState([]);
const [popupData, setPopupData] = useState({author: '', height: '',  width: ''});
const [popupVisible, setPopupVisible] = useState(false);

useEffect(async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const data = await response.json();
    setImages([...images, ...data]);
}, [page]);

const showMore = () => setPage(page + 1);

const showPopup = (id) => () => {
  setPopupData([...images].filter(image => image.id === id)[0]);
  setPopupVisible((popupVisible) => !popupVisible);
}

const onClose = () => setPopupVisible((popupVisible) => !popupVisible);

  return (
    <div className="app">
      <h1 className='app-heading'>Images gallery</h1>
      <ImageList
      data={images}
      showPopup={showPopup}
      />
      <Popup
      image={popupData}
      popupVisible={popupVisible}
      onClose={onClose}
      />
      <button className='show-more-btn' onClick={showMore}>Show more</button>
    </div>
  );
}

export default App;
