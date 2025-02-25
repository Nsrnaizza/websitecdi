import PropTypes from "prop-types";

const CardComponent = ({ image, title, text }) => {
  return (
    <div className="card-component">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardComponent;
