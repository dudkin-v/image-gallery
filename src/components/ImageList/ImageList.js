import './ImageList.styles.css';

const ImageList = ({ data }) => {
  
    return (
        <div className='images-container'>
            {data.map((image) => 
            <div className='image-card' key={image.id}>
                <img src={`https://picsum.photos/id/${image.id}/300/200`}/>
            </div>
            )}
        </div>
    )
}

export default ImageList;

// author: "Alejandro Escamilla"
// download_url: "https://picsum.photos/id/1/5616/3744"
// height: 3744
// id: "1"
// url: "https://unsplash.com/photos/LNRyGwIJr5c"
// width: 5616