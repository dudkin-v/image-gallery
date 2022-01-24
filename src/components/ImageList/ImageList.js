import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import './ImageList.styles.css';

const ImageList = ({ data, onClick }) => {
    return (
        <div className='images-container'>
            {data.map((image, index) => 
            <div className='image-card' key={image.id}>
                   <LazyLoadImage
                   className='image'
                   onClick={onClick(image.id)}
                   effect="blur"
                   src={`https://picsum.photos/id/${image.id}/300/200`}
                   alt={`Photo, copy url for view in full size ${image.download_url}`}
                   role='button'
                   aria-pressed='false'
                   tabIndex={index + 1}
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
    })).isRequired,
    onClick: PropTypes.func.isRequired
}

export default ImageList;