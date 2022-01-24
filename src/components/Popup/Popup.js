import PropTypes from 'prop-types';

import './Popup.styles.css';

const Popup = ({ image, popupVisible, onClose }) => {
    return (
        <div className={popupVisible ? 'popup-wrapper-active' : ''} onClick={onClose}>
           <div className={popupVisible ? 'popup-active' : 'popup-hiden'}>
               <h2>{`Author: ${image.author}`}</h2>
               <h2>{`Width: ${image.width}`}</h2>
               <h2>{`Height: ${image.height}`}</h2>
           </div>
        </div>
    )
}

Popup.propTypes = {
    image: PropTypes.shape({
        author: PropTypes.string.isRequired,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,

    popupVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Popup;
