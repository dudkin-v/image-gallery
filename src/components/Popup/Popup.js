import PropTypes from 'prop-types';

import './Popup.styles.css';

const Popup = ({ image, popupOpen, onClose }) => {
    return (
        <div className='popup'>
           <div className={popupOpen ? 'popup-wrapper-active' : ''} onClick={onClose}></div>
              <div className={popupOpen ? 'popup-active' : 'popup-hiden'}>
                  <div className='popup-description'>
                     <h2>{`Author: ${image.author}`}</h2>
                     <h2>{`Width: ${image.width}`}</h2>
                     <h2>{`Height: ${image.height}`}</h2>
                  </div>
                  <button className='popup-close-btn' onClick={onClose}>X</button>
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

    popupOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Popup;
