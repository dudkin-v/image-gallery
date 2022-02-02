import { useState, useEffect, useCallback } from "react";

import { ImageList } from "./components/ImageList";
import { Popup } from "./components/Popup";

import "./App.styles.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({
    author: "",
    height: "",
    width: "",
  });
  const fetchData = useCallback(async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );
    const data = await response.json();
    setImages((prevImages) => [...prevImages, ...data]);
  }, [page]);

  useEffect(() => {
    fetchData().catch(Error);
  }, [fetchData]);

  const showMore = () => setPage(page + 1);

  const onClick = (id) => () => {
    setPopupData(images.find((image) => image.id === id));
    setPopupOpen((prevPopup) => !prevPopup);
  };

  const onClose = () => setPopupOpen((prevPopup) => !prevPopup);

  return (
    <div className="app">
      <h1 className="app-heading">Images gallery</h1>
      <ImageList data={images} onClick={onClick} />
      <Popup image={popupData} popupOpen={popupOpen} onClose={onClose} />
      <button type="button" className="show-more-btn" onClick={showMore}>
        Show more
      </button>
    </div>
  );
};

export default App;
