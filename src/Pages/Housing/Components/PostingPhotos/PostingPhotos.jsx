import PropTypes from "prop-types";
import "./PostingPhotosStyles.css";

const PostingPhotos = ({ handleNext }) => {
  return (
    <div className="posting-photos-container">
      <div className="posting-photos-content">
        <h2 className="posting-photos-title">Posting Photos</h2>
        <p className="posting-photos-notice">
          *All fields required unless noted.
        </p>

        <div className="posting-photos-upload-container">
          <p className="posting-photos-upload-text">
            You can add 10 photos to your ad
          </p>
          <button className="posting-photos-upload-btn">
            Download From Computer
          </button>
          <div className="posting-photos-placeholder">
            <span className="posting-photos-placeholder-text">+</span>
            <p>You can add 10 photos to your ad</p>
          </div>
        </div>

        <button className="posting-photos-next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

PostingPhotos.propTypes = {
  handleNext: PropTypes.func.isRequired,
};

export default PostingPhotos;
