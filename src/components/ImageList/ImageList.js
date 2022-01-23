import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './ImageList.styles.css';

const ImageList = ({ data }) => {
    return (
        <div className='images-container'>
            {data.map((image) => 
            <div className='image-card' key={image.id}>
                <LazyLoadImage
                effect="blur"
                src={`https://picsum.photos/id/${image.id}/300/200`}
                />
            </div>
            )}
        </div>
    )
}

ImageList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        url: PropTypes.string.isRequired
    })).isRequired
}

export default ImageList;

// author: "Alejandro Escamilla"
// download_url: "https://picsum.photos/id/1/5616/3744"
// height: 3744
// id: "1"
// url: "https://unsplash.com/photos/LNRyGwIJr5c"
// width: 5616