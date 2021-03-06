import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./ImageList.styles.css";

const ImageList = ({ data, onClick }) => {
  return (
    <div className="images-container">
      {data.map((image, index) => (
        <div className="image-card" key={image.id}>
          <div
            className="image-wrapper"
            onClick={onClick(image.id)}
            role="button"
            aria-pressed="false"
            tabIndex={index + 1}
          >
            <LazyLoadImage
              className="image"
              effect="blur"
              src={`https://picsum.photos/id/${image.id}/300/200`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

ImageList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageList;
